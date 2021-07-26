import React from 'react';
import Header from '../Header';
import FullArticle from './FullArticle';
import { useParams, useHistory } from "react-router-dom";
import BlogList from '../home/main-blogs/BlogList';
import Blogs from '../home/main-blogs/Blogs';

function BlogPage({ data }) {
    console.log('sveiki, cia bus jums datos:', data);
    const { id } = useParams();
    const item = data.find(item => item.id === parseInt(id));
    return (
        <div className="window">
            <Header title="Welcome to Me blogs" subtitle="Here I write about me work" />
            <section className="container current-blog">
                <FullArticle img={item.imgLink} date={item.date} header={item.header} text={item.text} />
            </section>
            {/* <BlogList data={data} /> */}
            <Blogs data={data} header="Other blogs" />
        </div>
    )
}

export default BlogPage
