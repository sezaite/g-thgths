import React from 'react'
import { Link } from 'react-router-dom';


function BlogItem
    ({ header, intro, date, img, id }) {
    return (
        <div className="article col-3 col-md-4 col-sm-6 col-xsm-12" style={{ backgroundImage: `url(https://sezaite.github.io/g-thgths/img/${img})` }}>
            <div className="article-wrapper" >
                <h5>{header}</h5>
                <p className="date">{date}</p>
                <p className="intro">{intro}</p>
                {/* insert arrow icon */}
                <Link to={`/blogs/${id}`}>Read more</Link>
            </div>
        </div>
    )
}

export default BlogItem

