import React from "react";
import Link from "next/link";
import Image from "next/image";

const Frame = ({ href, src, alt }) => {
    return (
        <Link href={href} className={`rounded w-[300px] h-[auto] aspect-video`}>
            <Image src={src} alt={alt} />
        </Link>
    );
};

export default Frame;
