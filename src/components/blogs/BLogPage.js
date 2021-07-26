import React from 'react';
import Header from '../Header';
import FullArticle from './FullArticle';
import { useParams, useHistory } from "react-router-dom";
import BlogList from '../home/main-blogs/BlogList';

function BlogPage({ data }) {
    console.log('sveiki, cia bus jums datos:', data);
    const { id } = useParams();
    const item = data.find(item => item.id === parseInt(id));
    return (
        <>
            <Header title="Welcome to Me blogs" subtitle="Here I write about me work" />
            <section className="container blog-page">
                <FullArticle img={item.img} date={item.date} header={item.header} text={item.text} />
            </section>
            <section className="container blogs">
                <BlogList data={data} />
            </section>
        </>
    )
}

export default BlogPage
