import { returnStatement } from '@babel/types';
import { useState } from 'react';
import { isValidEmail } from '../../helpers/isValidEmail';
import { isValidName } from '../../helpers/isValidName';
import { isValidMessage } from '../../helpers/isValidMessage';
import { messageCleaner } from '../../helpers/messageCleaner';


function Contact() {
    const [error, setError] = useState("");
    const [details, setDetails] = useState({ name: "", email: "", text: "" });
    const contact = (e) => {
        e.preventDefault();
        if (details.name === "" || details.email === "" || details.text === "") {
            setError("All fields are required");
        }
        if (!isValidEmail(details.email)) {
            setError("Please enter valid email");
            return;
        }
        if (!isValidName(details.name)) {
            setError("Please use the Latin Alphabet");
            return;
        }
        if (!isValidMessage(details.text)) {
            setError("Message is a bit too short");
            return;
        }

        setError("");
        console.log(messageCleaner(details.text));
        setDetails({ ...details, text: messageCleaner(details.text) });
    }

    return (
        <section className="container contact-form">
            <div className="row">
                <h2 className="col-12">Contact me</h2>
                {error !== "" && <h4 className="error-msg col-12">{error}</h4>}
                <div className="form-section col-6 col-sm-12">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} placeholder="Enter your name..." />
                </div>
                <div className="form-section col-6 col-sm-12">
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={details.email} id="email" name="email" onChange={e => setDetails({ ...details, email: e.target.value })} placeholder="Enter your email..." />
                </div>
                <div className="form-section col-12">
                    <label htmlFor="message">Your message:</label>
                    <textarea id="message" maxLength="2000" rows="10" name="message" value={details.text} onChange={e => setDetails({ ...details, text: e.target.value })} placeholder="Tell me something..." />
                </div>
                <input type="submit" className="btn form-btn col-sm-12" value="Send" onClick={contact} />
            </div>
        </section>
    )
}

export default Contact
