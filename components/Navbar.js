import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <nav className="block p-4 text-center bg-slate-950 sm:justify-between sm:flex sm:p-6">
            <Link href="/">
                <p className="font-light text-textHoverColor whitespace-nowraptext-center font-mono">
                    ARAN HIBLOT
                </p>
            </Link>

            <div className="flex justify-between mt-[13px] gap-5 sm:mt-0 sm:gap-8">
                <NavLink name="Gallery" />
                <NavLink name="Skills" />
                <NavLink name="About" />
                <NavLink name="Contact" />
            </div>
        </nav>
    );
};

export default Navbar;
