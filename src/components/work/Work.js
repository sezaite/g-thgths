import ListOfWorks from "./ListOfWorks";
import Header from "../Header";
import useWindowDimensions from "../helpers/useWindowDimensions";

function Work({ data }) {

    const { height, width } = useWindowDimensions();

    return (
        <div className="window">
            <Header title="My projects" subtitle="Stuff I am working on" />
            <section className="container work-page">
                <ListOfWorks data={data} width={width} />
            </section>
        </div>
    )
}

export default Work
