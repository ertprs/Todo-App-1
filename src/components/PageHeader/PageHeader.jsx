import React from 'react'

export default (props) => (
    <header className="page-header">
        <h3 className="text-center mt-4">{props.name} <small className="ml-2">{props.small}</small> </h3>
    </header>
)