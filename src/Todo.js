import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, toggleTodo } from './redux/actions/actions'
import TodoList from './TodoList'
const Todo = ({ todo }) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState(todo);

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }
    const handleToggle = () => {
        dispatch(toggleTodo(todo.id))
    }
    const handleEdit = () => {
        dispatch(editTodo(input))

    }
    return (
        <div style={{ border: 'solid blue 2px ', margin: 20, display: 'flex', flexFlow: 'row reverse nowrap', justifyContent: "space-between" }}>
            <input style={{ textDecoration: todo.isDone ? "line-through" : "none" }} onChange={(e) => setInput({ ...input, description: e.target.value })} type="text" value={input.description}>
            </input>
            <div>
                <Button variant="danger" onClick={handleDelete} > Supp</Button>
                <Button variant="primary" onClick={handleEdit} >Edit</Button>

                <Button variant={todo.isDone ? "warning" : "success"} onClick={handleToggle}> {todo.isDone ? "undone" : "done"}</Button>
            </div></div>
    )
}

export default Todo
