import React, { useEffect } from 'react';
import Albums from './Albums';
import Link from 'react-router-dom';

function Hero({ data }) {
    let i = 0;
    const txt = 'Producer  |  Ex-vegan  |  First-time visitor to Lithuania';
    const speed = 100;

    function typeWriter() {
        if (window.innerWidth > 860) {
            if (i < txt.length) {
                document.querySelector(".hero .titles").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        } else {
            document.querySelector(".hero .titles").innerHTML = txt;
        }
    }

    useEffect(() => {
        typeWriter();
        console.log(data);
    }, []);

    return (
        <section className="container hero">
            <div className="row">
                <div className="col-6 col-sm-12 hero-left">
                    <h1>Sam Shepherd</h1>
                    <p className="titles"></p>
                </div>
                <div className="col-6 col-sm-12 hero-right">
                    <Albums data={data} />
                    <Link to="./work.html" className='btn large-btn'>Show all projects</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
