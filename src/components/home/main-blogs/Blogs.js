import React from 'react';
import BlogList from './BlogList';

function Blogs({ data }) {
    return (
        <section className="container news">
            <div className="row">
                <h2 className="col-12">Latest Blog post</h2>

            </div>
            <div className="row container view">
                <BlogList data={data} />
            </div>
        </section>
    )
}

export default Blogs
