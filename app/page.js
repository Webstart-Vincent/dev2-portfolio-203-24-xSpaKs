"use client";

import Link from "next/link";
import Frame from "../components/Frame";
import Head from "next/head";

import red from "/assets/red.jpg";
import blue from "/assets/blue.jpg";
import green from "/assets/green.jpg";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <div className="bg-slate-950 h-[100vh] pt-10">
                <div>
                    <h1 className="text-[20px] font-mono text-center text-textColor font-light sm:pl-[8%] sm:text-[26px] sm:text-left">
                        Hi, my name is{" "}
                        <span className="text-textHoverColor ">
                            Aran Hiblot
                        </span>
                        <br></br> I am a full stack web developer student
                    </h1>
                </div>
                <div>
                    <div className="flex justify-center m-3 mt-[100px]  space-x-3 lg:space-x-10 ">
                        <Frame href="" src={red} alt="Projet 1" />
                        <Frame href="" src={blue} alt="Projet 2" />
                        <Frame href="" src={green} alt="Projet 3" />
                    </div>
                    <Link href="" className="">
                        <p className="text-center hover:text-textHoverColor text-textColor font-mono pt-[20px] pt-sm:pt-[30px] text-sm sm:text-base transition:color duration-300 animate-bounce">
                            Voir les autres projets
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
}
