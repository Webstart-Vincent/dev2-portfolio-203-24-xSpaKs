import { redirect } from "next/navigation";
import Link from "next/link";
import dbConnect from "../../lib/mongodb.js";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route.js";
import WorkModel from "./../../models/work-model.js";

const getWorks = async () => {
    try {
        await dbConnect();
        const works = await WorkModel.find({});
        return works;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const Dashboard = async () => {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/");
    }

    let works = [];
    works = await getWorks();

    if (session?.user) {
        return (
            <>
                <div className="font-mono bg-mainColor min-h-[100vh] p-5 sm:p-10">
                    <h1 className="text-3xl text-secondaryColor text-center">
                        Dashboard
                    </h1>
                    <Link
                        className="flex justify-center text-secondaryColor hover:text-detailsColor duration-300 transition-color pb-10"
                        href={"dashboard/new"}
                    >
                        Add a project
                    </Link>
                    <div className="overflow-x-auto">
                        <table className="text-secondaryColor text-left whitespace-nowrap ">
                            <thead>
                                <tr className="text-lg">
                                    <th className="pr-5 pb-3">Date</th>
                                    <th className="pr-5 pb-3">Title</th>
                                    <th className="pr-5 pb-3">Slug</th>
                                    <th className="pr-5 pb-3">Description</th>
                                    <th className="pr-5 pb-3">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {works.map((work) => (
                                    <tr key={work._id}>
                                        <td className="pr-5 pb-2 min-w-0">
                                            24/01/2023
                                        </td>
                                        <td className="pr-5 pb-2">
                                            {work.title}
                                        </td>
                                        <td className="pr-5 pb-2">
                                            {work.slug}
                                        </td>
                                        <td className="pr-5 pb-2 w-full max-w-[10px] overflow-hidden text-ellipsis">
                                            {work.description}
                                        </td>
                                        <td className="pr-5 pb-2">Image</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
};

export default Dashboard;
