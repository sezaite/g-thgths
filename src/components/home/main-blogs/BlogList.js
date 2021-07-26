import React from 'react';
import BlogItem from './BlogItem';

function BlogList({ data }) {
    return (
        <div className="article-list row">
            <h2 className="col-12">Other blogs</h2>
            {
                data.map((blog) => (
                    <BlogItem key={blog.id} id={parseInt(blog.id)} header={blog.header} intro={blog.intro} date={blog.date} img={blog.imgLink} />
                ))
            }
        </div>
    )
}

export default BlogList

