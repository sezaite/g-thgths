import React from 'react'
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';


function BlogItem
    ({ header, text, date, img, id }) {
    return (
        <div className="article col-3 col-md-4 col-sm-6 col-xsm-12" style={{ backgroundImage: `url(https://sezaite.github.io/g-thgths/img/${img})` }}>
            <div className="article-wrapper" >
                <h5>{header}</h5>
                <p className="date">{date}</p>
                <LinesEllipsis
                    text={text}
                    maxLine='7'
                    ellipsis='...'
                    trimRight
                    basedOn='words'
                    className="intro"
                />
                <Link to={`/blogs/${id}`} className="read-more-link">Read more </Link>
            </div>
        </div>
    )
}

export default BlogItem

