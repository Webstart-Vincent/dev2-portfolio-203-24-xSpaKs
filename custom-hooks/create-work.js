"use server";

import WorkModel from "@/models/work-model.js";
import { dbConnect } from "@/lib/mongodb.js";

export const createWork = async (title, slug, description) => {
    try {
        await dbConnect();
        const createdWork = await WorkModel.create({
            title,
            slug,
            description,
        });
        if (createdWork) {
            return createdWork;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
