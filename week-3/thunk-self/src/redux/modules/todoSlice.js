import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      console.log("data => ", data.data);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.fulfilled]: (state, action) => {
      console.log("state =>", state);
      console.log("action =>", action);
    },
  },
});

export default todoSlice.reducer;
