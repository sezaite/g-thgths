import React, { useEffect } from 'react';
import About from './about/About';
import Hero from './hero/Hero';
import Blogs from './main-blogs/Blogs';
import Contact from './contact/Contact';


function Home({ data }) {
    useEffect(() => {
        console.log(data);
        console.log('hello');

    }, []);
    return (
        <div className="home window">
            <Hero data={data.albums} />
            <About />
            <Blogs data={data.blogs} />
            <Contact />
        </div>
    )
}

export default Home
