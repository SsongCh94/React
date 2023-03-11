import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 2개의 INPUT
// (1) 이름 : 크게 의미 없음
// (2) 함수   인자가 2개 들어감.
// payload 와 thunkAPI
export const __addNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  (payload, thunkAPI) => {
    // 수행하고 싶은 동작 : 3초를 기다리게 할 예정
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
    }, 3000);
  }
);

export const __minusNumber = createAsyncThunk(
  "MINUS_NUMBER_WAIT",
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(minusNumber(payload));
    }, 3000);
  }
);

// Initial State
const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { addNumber, minusNumber } = counterSlice.actions;
