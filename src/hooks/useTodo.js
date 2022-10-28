import { useEffect, useReducer } from 'react'
import { todoReducer } from '../todoReducer';

export const useTodo = (initialState = []) => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const todosPending = todos.filter((todo) => !todo.done).length;
    const todosCount = todos.length;

    const onNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo,
        };

        dispatch(action);
    };

    const onDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove todo',
            payload: id,
        };

        dispatch(action);
    };

    const onToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle todo',
            payload: id,
        };

        dispatch(action);
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return { todos, onNewTodo, onDeleteTodo, onToggleTodo, todosPending, todosCount }
}
