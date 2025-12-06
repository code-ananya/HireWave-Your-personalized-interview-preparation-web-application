import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";


export const inngest = new Inngest( { id: "hire-wave" } );


const syncUser = inngest.createFunction(
    { id: "sync-user"},
    { event: "clerk/user.created"},
    async ({event}) => {
        await connectDB();

        // --- THE FIX IS HERE ---
        // event.data is the raw Clerk payload. The actual user data is within event.data.data
        const userData = event.data.data; 

        // Now, destructure safely from userData (the actual user object)
        const { 
            id, 
            email_addresses, 
            primary_email_address_id, 
            first_name, 
            last_name, 
            image_url 
        } = userData;

        // The rest of the logic from the previous solution should now work:
        const primaryEmailObject = email_addresses.find(
            (emailObj) => emailObj.id === primary_email_address_id
        );

        const userEmail = primaryEmailObject?.email_address;
        const userName = `${first_name || ""} ${last_name || ""}`.trim();

        if (!userEmail) {
            console.error(`Clerk user ${id} created without a primary email. Aborting sync.`);
            return;
        }
        
        const newUser = {
            clerkId: id,
            email: userEmail,
            name: userName || 'New User',
            profileImage: image_url || "" 
        }

        await User.create(newUser)
        console.log(`User ${id} successfully synced to MongoDB.`);
    }
);

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