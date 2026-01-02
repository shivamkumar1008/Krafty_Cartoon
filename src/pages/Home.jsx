import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO />
            <Hero />
            <About />
            <Products />
            <WhyChooseUs />
            <Contact />
        </>
    );
};

export default Home;
