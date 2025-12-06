import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";


export const inngest = new Inngest( { id: "hire-wave" } );


const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();

    // --- FIX 1: Access the user data object correctly ---
    // The user data is nested inside 'data' property of the Clerk payload
    const userData = event.data.data;
    
    const { 
        id, 
        email_addresses, 
        primary_email_address_id, // <-- We need this property
        first_name, 
        last_name, 
        image_url 
    } = userData;

    // --- FIX 2: Safely get the primary email ---
    const primaryEmailObject = email_addresses.find(
        (emailObj) => emailObj.id === primary_email_address_id
    );
    
    const userEmail = primaryEmailObject?.email_address;
    
    // --- Add Check for Required Fields ---
    if (!userEmail) {
        console.error(`Clerk user ${id} created without a primary email. Aborting sync.`);
        return; // Prevents Mongoose validation error
    }

    const newUser = {
      clerkId: id,
      email: userEmail, // Use the safely extracted email
      name: `${first_name || ""} ${last_name || ""}`.trim() || 'New User',
      profileImage: image_url || "",
    };

    await User.create(newUser);

    // The Stream integration looks correct based on the inputs
    await upsertStreamUser({
      id: newUser.clerkId.toString(),
      name: newUser.name,
      image: newUser.profileImage,
    });
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