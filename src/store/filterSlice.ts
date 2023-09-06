import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Filter } from "../types";

const initialState = 0 as Filter

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<Filter>) => {
      state = action.payload
      return state;
    },
  }
})

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
