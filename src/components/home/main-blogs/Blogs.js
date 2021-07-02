import BlogList from './BlogList';
import useHowManyItems from '../../helpers/useHowManyItems';
import { useState, useEffect } from 'react';

function Blogs({ data }) {
    const articlesContainer = document.querySelector('.')
    const [loadedItems, setLoadedItems] = useState(0);
    const [toLoad, setToLoad] = useState(0);
    useEffect(() => {
        setToLoad(howManyToLoad());
    }, []);

    function howManyToLoad {
        if (innerHeight > 1300) return 4;
        if (innerHeight > 1080) return 3;
        if (innerHeight > 680) return 2;
        return 4;
    }


    const loadMore = e => {
        e.preventDefault();
        const howManyItems = useHowManyItems();
        loadArticles(howManyItems);
    }


    return (
        <section className="container news">
            <div className="row">
                <h2 className="col-12">Latest Blog posts</h2>
            </div>
            <div className="row container view">
                <BlogList data={data} />
            </div>
            <button onClick={loadMore}>Load More</button>
        </section>
    )
}

export default Blogs
