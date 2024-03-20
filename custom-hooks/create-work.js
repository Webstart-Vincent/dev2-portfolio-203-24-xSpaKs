"use server";

import WorkModel from "../models/work-model.js";
import { dbConnect } from "../lib/mongodb.js";

export const createWork = async (work) => {
    try {
        await dbConnect();
        const createdWork = await WorkModel.create(work);
        if (createdWork) {
            return createdWork;
        }
    } catch (error) {
        console.log(error);
    }
};
