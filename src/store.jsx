import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState: sliceState = { contents: [] };

const question = createSlice({
  name: "optionsReducer",
  initialState: [],
  reducers: {
    add_content: (state, action) => {
      state.push({ id: Date.now() });
    },
    remove_content: (state, action) =>
      state.filter((cont) => cont.id !== action.payload),
  },
});

const store = configureStore({ reducer: question.reducer });

export const { add_content, remove_content } = question.actions;

export default store;
