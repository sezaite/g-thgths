import LinesEllipsis from 'react-lines-ellipsis';
import { useState } from 'react';
import ReadMoreReact from 'read-more-react';
// import ReactReadMoreReadLess from "react-read-more-read-less";
//import ReadMoreText from 'read-more-less-react';

function WorkItem({ img, titles, date, albumName, header, description, paragraph, spotify, width }) {
    const [fullText, setFulltext] = useState(width < 420 ? false : true);
    return (
        <div className="row">
            <div className="col-4 col-md-4 col-sm-12 work-left">
                <img src={`img/${img}`} alt="album-art" />
                <h5>{albumName}</h5>
            </div>
            <div className="col-8 col-md-8 col-sm-12 work-right">
                <div className="header-section">
                    <h3>{header}</h3>
                    <h5>{date}</h5>
                </div>
                {fullText ? <p>{paragraph}</p> : (
                    <ReadMoreReact text={paragraph} readMoreText="Read more" min="400" ideal="500" max="700" />
                )}


                <iframe src={spotify} frameBorder='0' allowtransparency='true' allow='encrypted-media'></iframe>
            </div>
        </div>
    )
}

export default WorkItem
