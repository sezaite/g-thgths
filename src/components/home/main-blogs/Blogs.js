import BlogList from './BlogList';
import howManyItems from '../../helpers/howManyItems';
import { useState, useEffect } from 'react';

function Blogs({ data, header }) {
    const componentWidth = 300;
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
        <section className="container blogs">
            <div className="article-list row">
                <BlogList data={articleData} header={header} />
                <button className="btn loader col-12" onClick={loadMore}>Load More</button>
            </div>
        </section>
    )
}

export default Blogs
