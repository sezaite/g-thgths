import React from 'react'

function BlogsList({ data }) {
    return (
        <>
            {data.map((item) => (
                <BlogItem key={item.id} img={`img/${item.imgLink}`} date={item.date} intro={item.intro} header={item.header} text={item.text} />
            ))}
        </>
    )
}

export default BlogsList
