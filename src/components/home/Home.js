import React, { useEffect } from 'react';
import About from './about/About';
import Hero from './hero/Hero';
import Blogs from './main-blogs/Blogs';
import Contact from './contact/Contact';


function Home({ data }) {
    return (
        <div className="home window">
            <Hero data={data.albums} />
            <About />
            <section className="news container">
                <div className="row">
                    <h2 className="col-12">Latest Blog posts</h2>
                    <div className="col-12" id="blog-list">
                        <Blogs data={data.blogs} />
                    </div>
                </div>
            </section>
            <Contact />
        </div>
    )
}

export default Home
