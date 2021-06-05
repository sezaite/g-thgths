import React from 'react';
import BlogItem from './BlogItem';

function BlogList({ data }) {
    return (
        <div className="list row col-12">
            {
                data.map((blog) => (
                    <BlogItem key={blog.id} />
                ))
            }
        </div>
    )
}

export default BlogList
