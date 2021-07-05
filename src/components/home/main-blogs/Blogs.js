import BlogList from './BlogList';
import howManyItems from '../../helpers/howManyItems';
import { useState, useEffect } from 'react';

function Blogs({ data }) {
    document.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
    });
    const componentWidth = 240;
    const articleContainer = document.querySelector('#blog-list');
    // console.log(articleContainer);
    // console.log(articleContainer.clientWidth);
    const [itemCount, setItemCount] = useState(howManyItems(componentWidth));
    const [articleData, setArticleData] = useState(data.slice(0, itemCount));

    useEffect(() => {
        setArticleData(data.slice(0, itemCount));
    }, [itemCount]);

    const loadMore = (e) => {
        e.preventDefault();
        const currentCount = howManyItems(componentWidth);
        const extraItems = itemCount % currentCount;
        setItemCount(itemCount + (currentCount - extraItems) > data.length ? data.length : itemCount + (currentCount - extraItems));
    }

    return (
        <>
            <BlogList data={articleData} />
            <button className="btn loader col-12" onClick={loadMore}>Load More</button>
        </>
    )
}

export default Blogs
