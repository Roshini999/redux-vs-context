import { configureStore, createSlice } from "@reduxjs/toolkit";

// ✅ GOOD PATTERN — separate slices, components subscribe only to what they need

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "light" },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: { value: "" },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

const pageSlice = createSlice({
  name: "page",
  initialState: { value: 1 },
  reducers: {
    setPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const { setFilter } = filterSlice.actions;
export const { setPage } = pageSlice.actions;

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    filter: filterSlice.reducer,
    page: pageSlice.reducer,
  },
});

export default store;
