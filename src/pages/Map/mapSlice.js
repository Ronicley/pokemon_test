import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    pokemonCaptured: null,
  },
  reducers: {
    setPokemonCaptured: (state, action) => {
      state.pokemonCaptured = action.payload;
    },
  },
});

export const { setPokemonCaptured } = mapSlice.actions;

export const selectPokemonCaptured = state => state.map.pokemonCaptured;

export default mapSlice.reducer;