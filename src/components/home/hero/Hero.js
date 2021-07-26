import React, { useEffect } from 'react';
// import Albums from './Albums';
import { Link } from 'react-router-dom';
// import Controls from './Controls';
import { typeWriter } from './typeWriter';
import MySwiper from '../../swiper/MySwiper';

function Hero({ data }) {
    const heroAlbums = data.filter((album) => (album.isInHeroSection));

    useEffect(() => {
        typeWriter();
        return;
    }, []);

    return (
        <section className="container hero">
            <div className="row">
                <div className="col-6 col-xsm-12 hero-left">
                    <h1>Sam Shepherd</h1>
                    <p className="titles"></p>

                </div>
                <div className="col-6 col-xsm-12 hero-right">
                    <MySwiper data={heroAlbums} />
                    {/* <div className="controls">{[...Array(heroAlbums.length)].map((bubble, i) => <div className="control-bubble" key={i}></div>)}</div> */}
                    <Link to="./work">
                        <button className="btn large-btn">Show all projects</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
