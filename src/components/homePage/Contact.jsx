import React from 'react';
import { FcCalendar } from "react-icons/fc";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className=' grid md:grid-cols-3 gap-7 bg-black rounded-md px-8 py-16'>
            <div className=' flex items-center'>
                <div className=' text-xl mr-3'>
                    <FcCalendar />
                </div>
                <div className=' text-white'>
                    <h1>We are open monday-friday</h1>
                    <h1 className=' text-2xl font-semibold'>7:00 am - 9:00 pm</h1>
                </div>
            </div>

            <div className=' flex items-center'>
                <div className=' text-[#FF3811] text-xl mr-3'>
                    <MdOutlinePermPhoneMsg />
                </div>
                <div className=' text-white'>
                    <h1>Have a question?</h1>
                    <h1 className=' text-2xl font-semibold'>+2546 251 2658</h1>
                </div>
            </div>

            <div className=' flex items-center'>
                <div className=' text-[#FF3811] text-xl mr-3'>
                    <FaLocationDot />
                </div>
                <div className=' text-white'>
                    <h1>Need a repair? our address</h1>
                    <h1 className=' text-2xl font-semibold'>Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default Contact;