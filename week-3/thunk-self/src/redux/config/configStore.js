import todoSlice from "../modules/todoSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;
