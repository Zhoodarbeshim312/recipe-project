import { combineReducers, configureStore } from "@reduxjs/toolkit";
import getRecipeSlice from "./slices/recipeStoreSlice";
const rootReducer = combineReducers({
  recipeReducer: getRecipeSlice,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
