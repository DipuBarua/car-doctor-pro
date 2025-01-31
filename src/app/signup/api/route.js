import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    const newUser = await request.json();

    try {
        const db = await connectDB();
        const userCollection = db.collection("users");

        const exist = await userCollection.findOne({ email: newUser.email });
        if (exist) {
            return Response.json({ message: "User Exist" }, { status: 304 });
        }

        //bcrypt
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        const res = await userCollection.insertOne({ ...newUser, password: hashedPassword });

        return Response.json({ message: "User Account Created" }, { status: 200 })
    } catch (error) {
        return Response.json(
            { message: "Something went wrong!", error },
            { status: 500 }
        );
    }
}