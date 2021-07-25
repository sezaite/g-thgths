// import React from 'react';
// import Album from './Album';

// function Albums({ data }) {
//     const pseudoCount = 2;
//     const listWidth = (data.length + (2 * pseudoCount)) * 100;
//     const itemWidth = 100 / ((2 * pseudoCount) + data.length);

//     const heroArr = [data[2], data[1], ...data, data[0], data[1]];

//     return (
//         <div className="view">
//             <div className="list" style={{ width: `${listWidth}%`, marginLeft: "-200%" }}>
//                 {data.map((album, index) => (
//                     <Album key={index} imgLink={album.imgLink} titles={album.titles} description={album.description} spotifyLink={album.spotifyLink} width={itemWidth} />
//                 ))}
//             </div>
//         </div>

//     )
// }

// export default Albums
