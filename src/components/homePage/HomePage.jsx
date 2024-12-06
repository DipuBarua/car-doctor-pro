import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Products from './Products';
import ProductSlide from '../cards/ProductCard';
import TeamExpert from './TeamExpert';

const HomePage = () => {
    return (
        <div className=' min-h-screen'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <TeamExpert></TeamExpert>
        </div>
    );
};

export default HomePage;