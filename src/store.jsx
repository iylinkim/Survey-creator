import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// type sliceState = { contents: [] } | { questions: [] };

// const initialState: sliceState = { contents: [] };

const question = createSlice({
  name: "optionsReducer",
  initialState: [],
  reducers: {
    add_content: (state, action) => {
      state.push({ id: Date.now() });
    },
  },
});

const store = configureStore({ reducer: question.reducer });

export const { add_content } = question.actions;

export default store;
