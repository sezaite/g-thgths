import React from 'react'

function FullArticle({ img, date, header, text }) {
    return (
        <div classList="row">
            <h2 classList="col-12">{header}</h2>
            <h5 classList="col-12">{date}</h5>
            <img src={img} alt="blogImg" classList="col-12" />
            <p classList="col-12">{text}</p>
        </div>
    )
}

export default FullArticle
