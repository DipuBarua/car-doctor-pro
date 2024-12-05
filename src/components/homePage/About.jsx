import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className=' h-screen grid md:grid-cols-1 lg:grid-cols-2 py-16 gap-5'>
            <div className=' flex items-center'>
                <div className=' relative'>
                    <Image src={'/assets/images/about/person.jpg'} width={360} height={450} alt='person'></Image>

                    <div className=' absolute -bottom-12 -right-12'>
                        <Image src={'/assets/images/about/parts.jpg'} width={250} height={450} alt='parts' className=' border-4 border-white'></Image>
                    </div>

                </div>

            </div>


            <div className=' w-full h-full'>
                <div className=' space-y-6 w-2/3'>
                    <p className=' text-primary'>About Us</p>
                    <h1 className=' text-5xl font-bold'>We are qualified & of experience in this field</h1>
                    <p className=' text-slate-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=' text-slate-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className=' btn btn-primary rounded-sm'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;