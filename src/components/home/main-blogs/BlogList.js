import React from 'react';
import BlogItem from './BlogItem';


function BlogList({ data, header }) {
    return (
        <>
            <h2 className="col-12">{header}</h2>
            {
                data.map((blog) => (
                    <BlogItem key={blog.id} id={parseInt(blog.id)} header={blog.header} text={blog.text} date={blog.date} img={blog.imgLink} />
                ))
            }
        </>
    )
}

export default BlogList

