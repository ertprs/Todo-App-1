import React from 'react'

import Button from '../Button/Button.jsx'

const Form = (props) => {

    const input = React.useRef(null)

    const additing = () => {
        props.handleAdd()
        input.current.focus()
    }

    return (
        <div className="form">
            <center>
                <input
                    type="text"
                    className="col-sm-12 col-lg-9 m-1"
                    placeholder="Digite a tarefa"
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}
                    ref={input}
                />
                <Button icon="fa fa-plus" btn="btn btn-danger" onClick={additing} />
            </center>
        </div>
    )
}

export default Form