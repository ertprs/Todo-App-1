import React from 'react'

import Button from '../Button/Button.jsx'

const Form = (props) => {

    return (
        <div className="form">
            <center>
                <input
                    type="text"
                    className="col-sm-12 col-lg-9 m-1"
                    placeholder="Digite a tarefa"
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}
                />
                <Button icon="fa fa-plus" btn="btn btn-danger" onClick={props.handleAdd} />
            </center>
        </div>
    )
}

export default Form