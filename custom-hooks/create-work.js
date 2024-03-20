"use server";

import WorkModel from "@/models/work-model.js";
import { dbConnect } from "@/lib/mongodb.js";
console.log("je suis dans le create");
export const createWork = async (title, slug, description) => {
    try {
        await dbConnect();
        console.log("db connecté");
        const createdWork = await WorkModel.create({
            title,
            slug,
            description,
        });
        if (createdWork) {
            console.log("je suis dans if createdwork");
            return createdWork;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
