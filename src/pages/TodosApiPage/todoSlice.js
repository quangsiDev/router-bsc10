import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  todos: [],
};

export let todosSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setTodosAction: (state, action) => {
      state.todos = action.payload;
    },
  },
});

// createSlice() return  về object chứa action và reducer

export let { setTodosAction } = todosSlice.actions;

export default todosSlice.reducer;
