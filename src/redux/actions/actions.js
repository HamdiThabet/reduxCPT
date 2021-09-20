import { ADD_TODO, DEL_TODO, EDIT_TODO, TOGGLE_FILTER, TOGGLE_TODO } from "./typesAction"
import { v4 } from 'uuid'
export const addTodo = (description) => {
    return {
        type: ADD_TODO,
        payload: {
            id: v4(),
            description,
            isDone: false

        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: DEL_TODO,
        payload: id
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const toggleFilter = (filter) => {
    return {
        type: TOGGLE_FILTER,
        payload: filter
    }
}
export const editTodo = (editedTodo) => {
    return {
        type: EDIT_TODO,
        payload: editedTodo
    }
}