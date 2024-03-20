"use client";

import WorkModel from "@/models/work-model.js";
import { dbConnect } from "@/lib/mongodb.js";

export const createWork = async (work) => {
    console.log("avant try");
    try {
        await dbConnect();
        console.log("db connecté");
        const createdWork = await WorkModel.create(work);
        if (createdWork) {
            console.log("je suis dans if createdwork");
            return createdWork;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
