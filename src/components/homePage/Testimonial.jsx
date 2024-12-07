import React from 'react';
import TestimonialSlide from '../cards/TestimonialSlide';

const Testimonial = () => {
    return (
        <>
            <div className=' flex items-center justify-center pb-6'>
                <div className=' space-y-6 w-2/3 text-center'>
                    <p className=' text-primary'>Testimonial</p>
                    <h1 className=' text-5xl font-bold'>What Customer Says</h1>
                    <p className=' text-slate-500'>The majority have suffered alteration in some form, by injected Humour, or Randomised <br /> words which don't look even slightly believable. </p>
                </div>
            </div>

            <TestimonialSlide></TestimonialSlide>

        </>
    );
};

export default Testimonial;