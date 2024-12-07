import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Products from './Products';
import TeamExpert from './TeamExpert';
import Features from './Features';
import Testimonial from './Testimonial';

const HomePage = () => {
    return (
        <div className=' min-h-screen'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <TeamExpert></TeamExpert>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default HomePage;