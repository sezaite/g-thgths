import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSoundcloud, faTwitter } from "@fortawesome/free-brands-svg-icons"

function Nav() {
    useEffect(() => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector("nav");
        const navLinks = document.querySelectorAll("nav a");

        burger.addEventListener("click", () => {
            nav.classList.toggle("nav-active");

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ""
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
                }
            });
            burger.classList.toggle("x");
        });
    }, []);

    return (
        <header>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="logo">
                <h2>ShepSounds</h2>
            </div>
            <nav>
                <NavLink to="/" className="menu-item home" activeClassName="selected">Home</NavLink>
                <NavLink to="/work" className="menu-item work" activeClassName="selected">Work</NavLink>
                <NavLink to="/about" className="menu-item about" activeClassName="selected">About</NavLink>
                <NavLink to="/blog" className="menu-item news" activeClassName="selected">News</NavLink>
                <NavLink to="/index" className="menu-item contact" activeClassName="selected">Contact</NavLink>

                {/* change into links? */}

                <a href="#" target="_blank" className="fa fa-soundcloud" aria-hidden="true"><FontAwesomeIcon icon={faSoundcloud} /></a>
                <a href="#" target="_blank" className="fa fa-instagram" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" target="_blank" className="fa fa-twitter" aria-hidden="true"><FontAwesomeIcon icon={faTwitter} /></a>
            </nav>
        </header>
    )
}

export default Nav
