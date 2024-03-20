"use server";
import mongoose from "mongoose";

const dbConnect = async () => {
    console.log("je suis là");
    let cached = global.mongoose;

    if (!cached) cached = global.mongoose = { conn: null };
    if (cached.conn) return cached.conn;

    cached.conn = await mongoose.connect(process.env.MONGODB_URI);

    return cached.conn;
};

export default dbConnect;
