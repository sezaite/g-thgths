import React from 'react'

function Header({ title, subtitle }) {
    return (
        <div className="container header">
            <div className="row">
                <h1 className="col-12 header">{title}</h1>
                <h3 className="col-12 subheader">{subtitle}</h3>
            </div>
        </div>
    )
}

export default Header
