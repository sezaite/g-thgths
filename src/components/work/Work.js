import ListOfWorks from "./ListOfWorks";
import Header from "../Header";

function Work({ data }) {
    return (
        <div className="window">
            <Header title="My projects" subtitle="Stuff I am working on" />
            <section className="container work-page">
                <ListOfWorks data={data} />
            </section>
        </div>
    )
}

export default Work
