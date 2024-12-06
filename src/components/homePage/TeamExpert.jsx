import React from 'react';
import TeamExpertSlide from '../cards/TeamExpertSlide';

const TeamExpert = () => {
    return (
        <div className='py-16'>
            <div className=' flex items-center justify-center'>
                <div className=' space-y-6 w-2/3 text-center'>
                    <p className=' text-primary'>Team</p>
                    <h1 className=' text-5xl font-bold'>Meet Our Team</h1>
                    <p className=' text-slate-500'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                </div>
            </div>

            <TeamExpertSlide></TeamExpertSlide>

        </div>
    );
};

export default TeamExpert;