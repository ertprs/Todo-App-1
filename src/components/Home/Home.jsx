import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid'

import PageHeader from '../PageHeader/PageHeader.jsx'
import Form from '../Form/Form.jsx'
import List from '../List/List.jsx'

export default () => {
    useEffect(() => {
        refresh()
    }, [])

    const refresh = () => {
        if (localStorage.getItem("tasks") == null) {
            setList([])
        } else {
            setList(JSON.parse(localStorage.getItem("tasks")))
        }
    }

    let [description, setDescription] = useState('')
    let [list, setList] = useState([])

    const handleAdd = () => {
        let data = new Date()
        let task = {
            id: v4(),
            createdAt: {
                minuts: data.getMinutes(),
                hour: data.getHours(),
                day: data.getDay(),
                month: data.getMonth()
            },
            done: false,
            taskDescription: description
        }

        let resultList = list
        resultList.push(task)

        localStorage.setItem("tasks", JSON.stringify(resultList))

        refresh()
    }

    const handleMarkAsDone = (task) => {
        let newTask = {...task, done: true}

        let index = list.indexOf(task)

        let newList = list
        newList.splice(index, 1, newTask)

        localStorage.setItem("tasks", JSON.stringify(newList))

        refresh()
    }

    const handleMarkAsDoneFalse = (task) => {
        let newTask = {...task, done: false}

        let index = list.indexOf(task)

        let newList = list
        newList.splice(index, 1, newTask)

        localStorage.setItem("tasks", JSON.stringify(newList))

        refresh()
    }

    const handleRemoveTask = (task) => {
        let index = list.indexOf(task)

        let newList = list
        newList.splice(index, 1)

        localStorage.setItem("tasks", JSON.stringify(newList))

        refresh()
    }

    return (
        <div className="container">
            <PageHeader name="Home" small="Tarefas" />
            <div className="p-3">
                <Form description={description} setDescription={setDescription} handleAdd={handleAdd} />
                <List
                    list={list}
                    setList={setList}
                    handleMarkAsDone={handleMarkAsDone}
                    handleMarkAsDoneFalse={handleMarkAsDoneFalse}
                    handleRemoveTask={handleRemoveTask}
                />
            </div>
        </div>
    )
}

