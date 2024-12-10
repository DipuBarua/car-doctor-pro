import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () => {
    if (db) {
        return db;
    }

    // Create a MongoClient to set the Stable API version
    try {
        const uri = process.env.NEXT_PUBLIC_URI

        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db('car_doctor');
        return db;
    }
    catch (error) {
        console.log(error);
    }

}