import React from 'react';
import BlogItem from './BlogItem';

function BlogList({ data }) {
    return (
        <div className="list row col-12">
            {
                data.map((blog) => (
                    <BlogItem key={blog.id} header={blog.header} intro={blog.intro} date={blog.date} img={blog.imgLink} />
                ))
            }
        </div>
    )
}

export default BlogList
