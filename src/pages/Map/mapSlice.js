import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    itemEdited: {},
  },
  reducers: {
    setItemEdited: (state, action) => {
      state.itemEdited = action.payload;
    },
  },
});

export const { setItemEdited, setMapId } = mapSlice.actions;

export const selectItemEdited = state => state.map.itemEdited;

export default mapSlice.reducer;