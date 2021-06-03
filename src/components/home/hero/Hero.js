import React, { useEffect } from 'react'

function Hero() {
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
    }, []);

    return (
        <section className="container hero">
            <div className="row">
                <div className="col-6 col-sm-12">
                    <h1>Sam Shepherd</h1>
                    <p className="titles"></p>
                </div>
                <div className="col-6 col-sm-12 project-side">
                    <div className='view'></div>
                    <a href="./work.html" className='btn'>Show all projects</a>
                </div>
            </div>
        </section>
    )
}

export default Hero
