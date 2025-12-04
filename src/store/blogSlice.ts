import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  selectedCategory: string;
  currentPage: number;
  postsPerPage: number;
}

const initialState: BlogState = {
  selectedCategory: "الكل",
  currentPage: 1,
  postsPerPage: 6,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      state.currentPage = 1; // Reset to page 1 when category changes
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setSelectedCategory, setCurrentPage } = blogSlice.actions;
export default blogSlice.reducer;
