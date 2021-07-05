import React from 'react'

function Contact() {
    return (
        <section className="container contact-form">
            <div className="row">
                <h2 className="col-12">Contact me</h2>

                <form className="col-12">
                    <div className="col-6 form-section">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name..." />
                    </div>
                    <div className="col-6 form-section">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email..." />
                    </div>
                    <div className="col-6 form-section">
                        <label htmlFor="message">Your message:</label>
                        <textarea id="message" name="message" placeholder="Tell me something..." />
                    </div>
                    <input type="submit" className="btn form-btn" value="Send" />
                </form>
            </div>
        </section>
    )
}

export default Contact
