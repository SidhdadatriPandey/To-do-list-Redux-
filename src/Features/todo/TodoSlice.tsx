import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id: number;
    text: string;
}

export interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [{ id: 0, text: 'Hello world' }]
};

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const todo: Todo = {
                id: Date.now(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
