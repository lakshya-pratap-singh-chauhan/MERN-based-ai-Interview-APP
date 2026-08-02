import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongod;

const connectDb = async () => {
    try {
        const mongoUrl = process.env.MONGODB_URL;

        if (!mongoUrl || mongoUrl.includes("add your mongodb url")) {
            mongod = await MongoMemoryServer.create();
            await mongoose.connect(mongod.getUri());
            console.log("DataBase Connected to local in-memory MongoDB");
            return;
        }

        await mongoose.connect(mongoUrl);
        console.log("DataBase Connected");
    } catch (error) {
        console.log(`DataBase Error ${error}`);
    }
};

export default connectDb