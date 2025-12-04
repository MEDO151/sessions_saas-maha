import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  selectedCategory: string;
}

const initialState: BlogState = {
  selectedCategory: "الكل",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = blogSlice.actions;
export default blogSlice.reducer;
