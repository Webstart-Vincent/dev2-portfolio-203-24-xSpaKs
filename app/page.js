"use client";

import Image from "next/image";
import Link from "next/link";

import red from "/assets/red.jpg";
import blue from "/assets/blue.jpg";
import green from "/assets/green.jpg";

export default function Home() {
    return (
        <>
            <div className="bg-slate-950 h-[100vh] pt-10">
                <div>
                    <h1 className="text-[20px] font-mono text-center text-textColor font-light sm:pl-[8%] sm:text-[26px] sm:text-left ">
                        Hi, my name is{" "}
                        <span className="text-textHoverColor">Aran Hiblot</span>{" "}
                        <br></br> I am a full stack web developer student
                    </h1>
                </div>
                <div>
                    <div className="flex items-center justify-center m-3 mt-[100px] sm:mt-[100px] space-x-3 lg:space-x-10 ">
                        <Link
                            href=""
                            className="rounded w-[200px] h-[auto] aspect-video bg-white"
                        >
                            <Image src={red} alt="Projet 1"></Image>
                        </Link>
                        <Link
                            href=""
                            className="rounded w-[300px] h-[auto] aspect-video bg-white"
                        >
                            <Image src={blue} alt="Projet 2"></Image>
                        </Link>
                        <Link
                            href=""
                            className="rounded w-[200px] h-[auto] aspect-video bg-white"
                        >
                            <Image src={green} alt="Projet 3"></Image>
                        </Link>
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
