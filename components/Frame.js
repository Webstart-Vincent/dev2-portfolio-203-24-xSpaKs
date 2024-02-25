import React from "react";
import Link from "next/link";
import Image from "next/image";

const Frame = ({ href, src, alt, width }) => {
    return (
        <Link
            href={href}
            className={`relative rounded max-w-[350px] group/projet overflow-hidden m-auto`}
        >
            <Image src={src} alt={alt} />

            <div className="p-1 absolute top-0 text-secondaryColor w-[100%] group-hover/projet:text-detailsColor duration-300 transition-colors flex bg-black/60 h-[30px] justify-between gap-5">
                <p className="font-mono text-base whitespace-nowrap">
                    24/01/2023
                </p>
                <p className="font-mono text-base whitespace-nowrap truncate">
                    Titre du projet
                </p>
            </div>
            <p className="hidden text-center absolute top-[30px] w-[100%] text-sm bottom-0 font-mono leading-6 p-1 text-secondaryColor group-hover/projet:block bg-black/60 overflow-y-scroll">
                Voici mon projet de Portfolio qui a pour but
            </p>
        </Link>
    );
};

export default Frame;
