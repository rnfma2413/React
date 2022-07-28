import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "TODO",
    initialState: {
        todos: [],
    },
    reducers: {
        setTodo: (state, action) => {
            console.log(state)
            console.log(action)
            state.todos = action.payload  
        },
    },
});

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
