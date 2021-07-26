import React from 'react'

function FullArticle({ img, date, header, text }) {
    return (
        <div className="row">
            <img src={`https://sezaite.github.io/g-thgths/img/${img}`} alt="blogImg" className="col-12" />
            <h2 className="col-12">{header}</h2>
            <h5 className="col-12">{date}</h5>

            <p className="col-12">{text}</p>
        </div>
    )
}

export default FullArticle
