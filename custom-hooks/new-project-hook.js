import { useState } from "react";
import dbConnect from "../lib/mongodb.js";
import WorkModel from "../models/work-model.js";
import redirect from "next/navigation";

const useNewProject = async () => {
    return {
        title,
        slug,
        description,
        handleDescriptionChange,
        handleSlugChange,
        handleTitleChange,
    };
};

export default useNewProject;
