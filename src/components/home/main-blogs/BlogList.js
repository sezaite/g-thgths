import React from 'react';
import BlogLink from './BlogLink';

function BlogList({ blogs }) {
    return (
        <div className="list row col-12">
            {
                blogs.map((blog) => (
                    <BlogLink key={blog.id} />
                ))
            }
        </div>
    )
}

export default BlogList
