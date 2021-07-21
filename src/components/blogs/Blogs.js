import BlogsList from "./BlogsList";
import Header from '../Header';

function Blogs({ data }) {
    return (
        <div className="window">
            <Header title="Welcome to Me blogs" subtitle="Here I write about me work" />
            <section className="container blog-page">
                <BlogsList data={data} />
            </section>
        </div>
    )
}

export default Blogs
