"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createWork } from "@/custom-hooks/create-work.js";
import { useState } from "react";

const New = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSlugChange = (event) => {
        setSlug(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleCreateButton = async () => {
        await createWork({ title, slug, description });
        // if (createdWork) router.push("/dashboard");
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    if (status == "unauthenticated") {
        router.push("/");
    }

    if (status == "authenticated") {
        return (
            <>
                <div className="font-mono bg-mainColor min-h-[100vh] p-5 sm:p-10">
                    <h1 className="text-2xl text-secondaryColor text-center pb-7">
                        Create a new project
                    </h1>
                    <form action={""} method="post" onSubmit={handleFormSubmit}>
                        <div className="text-center text-secondaryColor mb-[30px]">
                            <label>Date of the project</label>
                            <input
                                className="px-[10px] mt-[10px] text-black block ml-[auto] mr-[auto] "
                                type="date"
                                name="date"
                            ></input>
                        </div>
                        <div className="text-secondaryColor text-center block ml-[auto] mr-[auto] min-w-[250px] mb-[30px]">
                            <label>Title of the project</label>
                            <input
                                className="text-black mt-[10px] block ml-[auto] mr-[auto] min-w-[250px]"
                                type="text"
                                name="name"
                                required
                                value={title}
                                onChange={handleTitleChange}
                            ></input>
                        </div>
                        <div className="text-secondaryColor text-center block ml-[auto] mr-[auto] min-w-[250px] mb-[30px]">
                            <label>Slug of the project (kebab case)</label>
                            <input
                                className="text-black mt-[10px] block ml-[auto] mr-[auto] min-w-[250px]"
                                type="text"
                                name="slug"
                                required
                                value={slug}
                                onChange={handleSlugChange}
                            ></input>
                        </div>
                        <div className="text-secondaryColor text-center mb-[30px] m-auto max-w-[600px]">
                            <label>Description of the project</label>
                            <textarea
                                className="p-1 text-black min-h-[100px] mt-[10px] block ml-[auto] mr-[auto] min-w-[250px] w-[100%]"
                                name="description"
                                value={description}
                                required
                                onChange={handleDescriptionChange}
                            ></textarea>
                        </div>
                        <div className="grid text-secondaryColor text-center justify-center mb-[30px]">
                            <label>Image of the project</label>
                            <input
                                className="mt-[10px]"
                                type="file"
                                name="image"
                            ></input>
                        </div>
                        <input
                            className="pt-[10px] text-secondaryColor block m-auto cursor-pointer hover:text-detailsColor transition:color duration-300"
                            type="submit"
                            value={"Add the project"}
                            onClick={handleCreateButton}
                        ></input>
                    </form>
                </div>
            </>
        );
    }
};

export default New;
