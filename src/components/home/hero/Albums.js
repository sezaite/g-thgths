import React from 'react';
import Album from './Album';

function Albums({ data }) {
    return (
        <div className="view">

            {data.map((album) => (
                <Album key={album.id} imgLink={album.imgLink} titles={album.titles} description={album.description} spotifyLink={album.spotifyLink} />
            ))}
        </div>
    )
}

export default Albums
