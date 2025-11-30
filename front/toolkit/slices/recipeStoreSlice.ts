import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  recipe: [],
};
export const getRecipeSlice = createSlice({
  name: "GETRECIPE",
  initialState,
  reducers: {
    setGetRecipe(state, action: PayloadAction<any>) {
      state.recipe = action.payload;
    },
  },
});

export const { setGetRecipe } = getRecipeSlice.actions;
export default getRecipeSlice.reducer;
