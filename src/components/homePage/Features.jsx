import React from 'react';
import Image from 'next/image';

const Features = () => {
    const items = [1, 2, 3, 4, 5, 6];
    return (
        <div className='pb-16'>
            <div className=' flex items-center justify-center pb-6'>
                <div className=' space-y-6 w-2/3 text-center'>
                    <p className=' text-primary'>Core Features</p>
                    <h1 className=' text-5xl font-bold'>Why Choose Us</h1>
                    <p className=' text-slate-500'>The majority have suffered alteration in some form, by injected Humour, or Randomised <br /> words which do not look even slightly believable. </p>
                </div>
            </div>

            <div className=' flex items-center justify-center gap-7'>
                {
                    items.map((item, index) => <div key={index}>
                        <h1>{item}</h1>
                        <Image src={`/assets/icons/check.svg`} alt='icon' width={100} height={100}></Image>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Features;