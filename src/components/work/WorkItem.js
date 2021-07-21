import React from 'react'

function WorkItem({ img, titles, date, albumName, header, description, paragraph, spotify }) {
    return (
        <div className="row">
            <div className="col-4 col-md-4 col-sm-12 work-left">
                <img src={`/img/${img}`} alt="album-art" />
                <h5>{albumName}</h5>
            </div>
            <div className="col-8 col-md-8 col-sm-12 work-right">
                <div className="header-section">
                    <h3>{header}</h3>
                    <h5>{date}</h5>
                </div>
                <p>{paragraph}</p>
                <iframe src={spotify} frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>
            </div>
        </div>
    )
}

export default WorkItem
