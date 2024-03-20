import mongoose from "mongoose";
const workSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true,
        },
        slug: {
            type: String,
            unique: true,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { collection: "works" }
);

const WorkModel =
    mongoose.models.WorkModel || mongoose.model("WorkModel", workSchema);

export default WorkModel;
