import React from 'react';
import Album from './Album';

function Albums({ data }) {
    const listWidth = (data.length + 4) * 100;
    return (
        <div className="view">
            <div className="list" style={{ width: `${listWidth}%`, marginLeft: "-200%" }}>
                {data.map((album) => (
                    <Album key={album.id} imgLink={album.imgLink} titles={album.titles} description={album.description} spotifyLink={album.spotifyLink} />
                ))}
            </div>
        </div>

    )
}

export default Albums
