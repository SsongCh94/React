import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers, createStore } from "redux";
import counter from "../modules/counterSlice";

// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//   counter,
// });

// const store = createStore(rootReducer);

// TODO : Redux Toolkit
const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
