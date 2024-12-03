import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-black text-white py-14">
            <aside>
                <Link href={'/'}>
                    <Image src={'/assets/logo.svg'} alt='logo' width={100} height={60}></Image>
                </Link>

                <p>
                    Edwin Diaz is a software and web
                    <br />
                    technologies engineer, a life coach
                    <br />
                    trainer who is also a serial .
                </p>
            </aside>

            <nav>
                <h6 className=" text-xl font-bold text-white">About</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className=" text-xl font-bold text-white">Company</h6>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">About</a>
            </nav>
            <nav>
                <h6 className=" text-xl font-bold text-white">Support</h6>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </nav>

        </footer>
    );
};

export default Footer;