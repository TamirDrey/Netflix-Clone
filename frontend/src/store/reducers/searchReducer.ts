import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchBoxState } from "@/types/content-types";
import { RootState } from "../store";

const initialState: SearchBoxState = {
  isOpen: false,
  query: undefined,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearchBox: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSearchBox: (state) => {
      state.isOpen = false;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { toggleSearchBox, setQuery, closeSearchBox } = searchSlice.actions;

export default searchSlice.reducer;

export const selectQuery = (state: RootState) => state.search.query;
export const selectIsSearchBoxOpen = (state: RootState) => state.search.isOpen;
