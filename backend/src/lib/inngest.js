import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";


export const inngest = new Inngest( { id: "hire-wave" } );


const syncUser = inngest.createFunction(
    { id: "sync-user"},
    { event: "clerk/user.created"},
    async ({event}) => {
        await connectDB();

        // 1. Destructure the full user data object from the event payload
        const userData = event.data.data;

        // 2. Extract required fields from userData
        const { id, email_addresses, primary_email_address_id, first_name, last_name, image_url } = userData;

        // --- CORRECT LOGIC FOR PRIMARY EMAIL ---
        // Find the specific email object that matches the primary_email_address_id
        const primaryEmailObject = email_addresses.find(
            (emailObj) => emailObj.id === primary_email_address_id
        );

        // Get the email string (it's called email_address, not email_addresses)
        const userEmail = primaryEmailObject?.email_address;
        
        // Construct the full name
        const userName = `${first_name || ""} ${last_name || ""}`.trim();

        // Check if the required email is present
        if (!userEmail) {
            console.error(`Clerk user ${id} created without a primary email. Aborting sync.`);
            return; // Exit function gracefully
        }
        
        // --- NEW USER OBJECT ---
        const newUser = {
            clerkId: id,
            // Use the correctly extracted primary email
            email: userEmail,
            // Use the constructed name (which maps to your schema's 'name' field)
            name: userName || 'New User',
            profileImage: image_url || "" // Ensure this is not null if your schema doesn't handle it
        }

        await User.create(newUser)
        console.log(`User ${id} successfully synced to MongoDB.`);
    }

)

// The deleteUserFromDB function is already correct.
const deleteUserFromDB = inngest.createFunction(
    { id: "delete-user-from-db"},
    { event: "clerk/user.deleted"},
    async ({event}) => {
        await connectDB();
        const { id } = event.data;
        // NOTE: The ID here is the Clerk user ID, not the full user data object ID
        await User.deleteOne({ clerkId: id });
        console.log(`User ${id} deleted from MongoDB.`);
    }
)

export const functions = [ syncUser , deleteUserFromDB ]