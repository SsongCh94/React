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
      console.log("data.data : ", data.data);

      // toolkit 에서 제공하는 API
      // Promise -> resolve(= 네트워크 요청이 성공한 경우) -> dispatch 해주는 기능을 가진 API
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("error", error);

      // toolkit 에서 제공하는 API
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state, aciton) => {
      //아직 통신이 진행중일 때
      state.isLoading = true;
      state.isError = false;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

// export const {} = todosSlice.acitons;
export default todosSlice.reducer;

// 1. thunk 함수 구현,
// 2. 리듀서 로직 구현 : reducers -> extraReducers
// 서버 통신 : 100% 성공 (x)
// 지금까지의 redux state (todos, counter)
// 앞으로의 state (isLoading, isError, data)
// 3. 기능 확인 (network) + devtools
// 4. Store의 값을 조회 + 화면에 렌더링
