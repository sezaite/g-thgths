import React from 'react';
import BlogList from './BlogList';

function Blogs() {
    return (
        <section className="container news">
            <div className="row">
                <h2 className="col-12">Latest Blog post</h2>

            </div>
            <div className="row container view">
                <BlogList />
            </div>
        </section>
    )
}

export default Blogs
