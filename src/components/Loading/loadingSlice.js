import {createSlice} from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    type: "balls",
    color: "#568e95",
  },
  reducers: {
    setLoadingType: (state, action) => {
      state.type = action.payload;
    },
    setLoadingColor: (state, action) => {
      state.color = action.payload;
    }
  }
});

export const {setLoadingType, setLoadingColor} = loadingSlice.actions;

export default loadingSlice.reducer;