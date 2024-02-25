import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <nav
            className="block p-4 text-center bg-mainColor sm:justify-between sm:flex sm:p-6
        border-b-[1px] border-detailsColor/90"
        >
            <Link href="/">
                <p className="font-light text-detailsColor whitespace-nowraptext-center font-mono">
                    ARAN HIBLOT
                </p>
            </Link>

            <div className="flex justify-evenly pr-0 sm:pr-[40px] mt-[13px] gap-5 sm:mt-0 sm:gap-8">
                <NavLink name="Gallery" />
                <NavLink name="Skills" />
                <NavLink name="About" />
                <NavLink name="Contact" />
            </div>
        </nav>
    );
};

export default Navbar;
