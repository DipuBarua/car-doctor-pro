import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiHandbag } from "react-icons/pi";
import { TbSearch } from "react-icons/tb";

const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]

    return (
        <div className=' bg-base-100 text-slate-800'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">

                    <Link href={'/'}>
                        <Image src={'/assets/logo.svg'} alt='logo' width={100} height={60}></Image>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center space-x-5'>
                        {
                            navItems.map(item => <Link
                                key={item.path}
                                href={item.path}
                                className=' font-semibold hover:text-primary'
                            >{item.title}</Link>)
                        }
                    </div>


                </div>
                <div className="navbar-end px-2">
                    <div className=' flex items-center text-xl space-x-4'>
                        <PiHandbag />
                        <TbSearch />
                        <a className="btn btn-outline btn-primary">Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;