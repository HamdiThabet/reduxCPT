import { v4 as uuidv4 } from 'uuid'
import { ADD_TODO, DEL_TODO, EDIT_TODO, TOGGLE_FILTER, TOGGLE_TODO } from '../actions/typesAction'
const initState = {
    todos: [
        {
            id: uuidv4(),
            description: 'Learn React',
            isDone: true
        }
    ],
    filter: 'all'
}
const todoReducer = (state = initState, { type, payload }) => {
    var tab
    switch (type) {
        case ADD_TODO:
            tab = state.todos
            tab.push(payload)
            return { ...state, todos: tab }
        case DEL_TODO:
            return {
                ...state,
                todos: state.todos.filter(elm => elm.id !== payload)
            }
        case TOGGLE_TODO:
            /* tab = state.todos
            const elementIndex = tab.findIndex(elm => elm.id === payload) //0
            tab[elementIndex].isDone = !tab[elementIndex].isDone
            return { ...state, todos: tab } */
            return {
                ...state,
                todos: state.todos.map(elm => elm.id === payload ? { ...elm, isDone: !elm.isDone } : elm)
            }
        case TOGGLE_FILTER:

            return {
                ...state,
                filter: payload
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((elm) => elm.id === payload.id ? payload : elm)
            }
        default:
            return state
    }
}
export default todoReducer