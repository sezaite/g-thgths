import BlogList from './BlogList';
import howManyItems from '../../helpers/howManyItems';
import { useState, useEffect } from 'react';

function Blogs({ data }) {
    const componentWidth = 200;
    const [itemCount, setItemCount] = useState(howManyItems(componentWidth));
    const [articleData, setArticleData] = useState(data.slice(0, itemCount));

    useEffect(() => {
        setArticleData(data.slice(0, itemCount));
    }, [itemCount]); //ar cia reikia, ar jau su uzkrovimu bus redi stedi??

    const loadMore = (e) => {
        e.preventDefault();
        const currentCount = howManyItems(componentWidth);
        const extraItems = itemCount % currentCount;
        setItemCount(itemCount + (currentCount - extraItems) > data.length ? data.length : itemCount + (currentCount - extraItems));
    }

    return (
        <section className="container news">
            <div className="row">
                <h2 className="col-12">Latest Blog posts</h2>
            </div>
            <div className="row container view">
                <BlogList data={articleData} />
            </div>
            <button onClick={loadMore}>Load More</button>
        </section>
    )
}

export default Blogs
