import React from 'react';
import Banner from './Banner';
import About from './About';

const HomePage = () => {
    return (
        <div className=' min-h-screen'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default HomePage;