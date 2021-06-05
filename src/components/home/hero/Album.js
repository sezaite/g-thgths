import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom';

function Album({ id, imgLink, titles, description, spotifyLink }) {
    return (
        <div className="album-art" style={{ backgroundImage: `url(img/${imgLink})` }}>

            <div className="blur" style={{ backgroundImage: `url(img/${imgLink})` }}></div >
            <div className="project-wrap">
                {titles.map((title, index) => (
                    <Title key={index} name={title} />
                ))}
                <p>{description}<Link to="#" className="expand">Read more...</Link></p>
                {/* <iframe src={spotifyLink} width='300' height='80' frameBorder='0' allowtransparency='true' allow='encrypted-media'></iframe> */}
            </div>
        </div >
    )
}

export default Album
