import React from 'react'


function BlogItem
    ({ header, intro, date, img }) {
    return (
        <div className="article col-lg-4 col-3 col-md-6 col-xs-12">
            <div className="article-wrapper" style={{ background: `url(img${img})` }}>
                <h5>{header}</h5>
                <p className="date">{date}</p>
                <p>{intro}</p>
                {/* insert arrow icon */}
            </div>
        </div>
    )
}

export default BlogItem

