import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Album({ id, imgLink, titles, description, spotifyLink }) {
    const [isInfoVisible, setIsInfoVisible] = useState(false)
    const handleMouseEnter = () => {
        setIsInfoVisible(true);
    }
    const handleMouseLeave = () => {
        setIsInfoVisible(false);
    }

    return (
        <div className="album-art" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} style={{ backgroundImage: `url(https://sezaite.github.io/g-thgths/img/${imgLink})` }} >
            <div className={`blur ${isInfoVisible ? 'visible' : ""}`} style={{ backgroundImage: `url(https://sezaite.github.io/g-thgths/img/${imgLink})` }} ></div >
            <div className={`project-wrap ${isInfoVisible ? 'visible' : ""}`}>
                {titles.map((title, index) => (
                    <h4 key={index}>{title}</h4>
                ))}
                <p>{description}<Link to="#" className="expand">Read more...</Link></p>
                <iframe src={spotifyLink} width='300' height='80' frameBorder='0' allowtransparency='true' allow='encrypted-media'></iframe>
            </div>
        </div >
    )
}

export default Album
