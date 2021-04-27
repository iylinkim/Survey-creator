import { configureStore, createSlice } from "@reduxjs/toolkit";

export const survey = createSlice({
  name: "contentsReducer",
  initialState: {},
  reducers: {
    add_content: (state, action) => {
      const id = Date.now();
      state[action.payload].contents.push({ id });
    },
    remove_content: (state, action) => {
      const { questionId, contentId } = action.payload;
      const filtered = { ...state }[questionId].contents.filter(
        (cont) => cont.id !== contentId
      );
      
      state[questionId] = {
        ...{ ...state }[questionId],
        contents: filtered,
      }
    },
    get_content: (state, action) => {
      const { questionId, contentId, text } = action.payload;
      state[questionId].contents.forEach((cont, i, origin) => {
        if (cont.id === contentId) {
          origin[i] = { ...origin[i], text };
        }
      });
    },

    add_question: (state) => {
      const id = Date.now();
      state[id] = {
        id,
        title: "",
        desc: "",
        contents: [],
      };
    },
    remove_question: (state, action) => {
      const target = Object.keys(state).filter(
        (key) => state[key].id === action.payload
      )[0];
      const updated = { ...state };
      delete updated[target];
      return updated;
    },
    get_question_type: (state, action) => {
      state[action.payload.id] = {
        ...state[action.payload.id],
        question_type: action.payload.type,
      };
    },
    get_question_title: (state, action) => {
      state[action.payload.id] = {
        ...state[action.payload.id],
        title: action.payload.text,
      };
    },
    get_question_desc: (state, action) => {
      state[action.payload.id] = {
        ...state[action.payload.id],
        desc: action.payload.text,
      };
    },
  },
});

const store = configureStore({
  reducer: survey.reducer,
});

export const {
  add_content,
  remove_content,
  add_question,
  remove_question,
  get_content,
  get_question_type,
  get_question_title,
  get_question_desc,
} = survey.actions;

export default store;
