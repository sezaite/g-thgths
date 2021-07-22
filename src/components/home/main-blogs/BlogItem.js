import React from 'react'


function BlogItem
    ({ header, intro, date, img }) {
    return (
        <div className="article" style={{ background: `url(https://sezaite.github.io/g-thgths/img/${img})` }}>
            <div className="article-wrapper" >
                <h5>{header}</h5>
                <p className="date">{date}</p>
                <p className="intro">{intro}</p>
                {/* insert arrow icon */}
            </div>
        </div>
    )
}

export default BlogItem

