import BlogItem from './BLogPage'

function BlogsList({ data }) {
    return (
        <>
            {data.map((item) => (
                <BlogItem key={item.id} img={`https://sezaite.github.io/g-thgths/img/${item.imgLink}`} date={item.date} intro={item.intro} header={item.header} text={item.text} />
            ))}
        </>
    )
}

export default BlogsList
