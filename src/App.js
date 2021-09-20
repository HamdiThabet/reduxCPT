import './App.css';
import { v4 as uuidv4 } from 'uuid'
import TodoList from './TodoList';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap'
import todoReducer from './redux/reducers/tReducers';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleFilter } from './redux/actions/actions';

const App = () => {
  const todoState = useSelector(state => state)
  const description = useRef()
  const dispatch = useDispatch()
  const handleAddTodo = () => {
    dispatch(addTodo(description.current.value))
    description.current.value = ""
  }
  const handleFilterChange = (filter) => {
    dispatch(toggleFilter(filter))
  }
  const filtedTodos = () => {
    switch (todoState.filter) {
      case 'done':
        return todoState.todos.filter(elm => elm.isDone === true)
      case 'undone':
        return todoState.todos.filter(elm => elm.isDone === false)
      default:
        return todoState.todos
    }
  }
  return (
    <div className="App" >
      <input ref={description} type="text" placeholder="new Todo ?" style={{ width: "40%" }} />
      <Button variant="primary" onClick={handleAddTodo} >ADD</Button>
      <br></br>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => handleFilterChange('Undone')}>undone</Button>
        <Button variant="secondary" onClick={() => handleFilterChange('all')}>All</Button>
        <Button variant="secondary" onClick={() => handleFilterChange('done')}>Done</Button>
      </ButtonGroup>
      <h1> TODO APP </h1>
      <TodoList todoList={filtedTodos()} />

    </div>
  );
}

export default App;
