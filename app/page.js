import Link from "next/link";
import Frame from "../components/Frame";
import Head from "next/head";

import blue from "/assets/blue.jpg";

export const metadata = {
    title: "Contact",
    description: "Portfolio website of Aran Hiblot",
    favicon: "icon.ico",
};

export default function Home() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href={metadata.favicon} />
            </Head>
            <div className="bg-mainColor min-h-[100vh] pt-10">
                <div>
                    <h1 className="text-[20px] font-mono text-center text-secondaryColor font-light sm:pl-[8%] sm:text-[26px] sm:text-left">
                        Hi, my name is{" "}
                        <span className="text-detailsColor ">Aran Hiblot</span>
                        <br></br> I am a full stack web developer student
                    </h1>
                </div>
                <div className="px-[20px]">
                    <div className="w-[50%] m-auto mt-[30px] sm:flex sm:w-auto sm:justify-center sm:mt-[80px] sm:space-x-3  lg:space-x-10 ">
                        <Frame
                            href=""
                            src={blue}
                            alt="Projet 1"
                            width="300px"
                        />
                        <Frame
                            href=""
                            src={blue}
                            alt="Projet 2"
                            width="300px"
                        />
                        <Frame
                            href=""
                            src={blue}
                            alt="Projet 3"
                            width="300px"
                        />
                    </div>
                    <Link href="gallery" className="">
                        <p className="text-center hover:text-detailsColor text-secondaryColor font-mono pt-[25px] pt-sm:pt-[30px] text-sm sm:text-base transition:color duration-300 animate-bounce">
                            Voir les autres projets
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
}
