import React from 'react';
import About from './about/About';
import Hero from './hero/Hero';
import Blogs from './main-blogs/Blogs';
import Contact from './contact/Contact';


function Home() {
    return (
        <div className="home window">
            <Hero />
            <About />
            <Blogs />
            <Contact />
        </div>
    )
}

export default Home
