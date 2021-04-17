import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "../pages/Map/mapSlice";

export default configureStore({
  reducer: {
    map: mapReducer,
  },
});