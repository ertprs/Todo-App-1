import React from 'react'

import Button from '../ButtonList/ButtonList.jsx'

import './List.css'

const List = (props) => {

    const renderRows = () => {
        let list = props.list
        return list.map(task => (
            <tr key={task.id}>
                <td className={task.done ? 'done' : '' + 'description'}>{task.taskDescription}</td>
                <td>
                    <Button button='btn btn-outline-success' icon='fa fa-check' hide={task.done} onClick={() => props.handleMarkAsDone(task)}/>
                    <Button button='btn btn-outline-warning' icon='fa fa-repeat' hide={!task.done} onClick={() => props.handleMarkAsDoneFalse(task)}/>
                    <Button button='btn btn-outline-danger' icon='fa fa-times' hide={!task.done} onClick={() => props.handleRemoveTask(task)}/>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table mt-5">
            <thead>
                <tr>
                    <th>Name</th>
                    <th className="actions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default List