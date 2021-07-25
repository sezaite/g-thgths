import BlogsList from "./BlogsList";


function Blogs({ data }) {
    return (
        <div className="window">
            <BlogsList data={data} />

        </div>
    )
}

export default Blogs
