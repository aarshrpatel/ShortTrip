import React from 'react';
import logo from '../../assets/logo.png';
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <div>
                <Image src={logo} alt={"logo"} className={'flex fixed w-16 h-16 mx-6 my-5'}/>
            </div>
            <nav
                className="fixed top-0 left-0 w-full flex items-center justify-between backdrop-blur-lg bg-white/10 z-50">
                <div
                    className="font-bold fixed top-8 left-1/2 transform -translate-x-1/2 bg-mutecolor text-foreground px-2 py-2 rounded-full shadow-lg flex gap-6 text-lg">
                    <Link href="/" className="rounded-full px-4 hover:bg-red hover:text-mutecolor transition">Home</Link>
                    <Link href="/about" className="rounded-full px-4 hover:bg-red hover:text-mutecolor transition">Our Story</Link>
                    <Link href="/" className="rounded-full px-4 hover:bg-red hover:text-mutecolor transition">Locations</Link>
                    <Link href="/" className="rounded-full px-4 hover:bg-red hover:text-mutecolor transition">Contact Us</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;