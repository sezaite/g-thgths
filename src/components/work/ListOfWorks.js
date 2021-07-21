import WorkItem from "./WorkItem"

function ListOfWorks({ data }) {
    return (
        <>
            {data.map((item) => (
                <WorkItem key={item.id} img={item.imgLink} titles={item.titles} date={item.date} albumName={item.name} header={item.header} description={item.description} paragraph={item.p} spotify={item.spotifyLink} />
            ))}
        </>
    )
}

export default ListOfWorks
