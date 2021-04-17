import {createSlice} from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    pokemonCaptured: null,
    maxAmountPokemonsReached: false
  },
  reducers: {
    setPokemonCaptured: (state, action) => {
      state.pokemonCaptured = action.payload;
    },
    setMaxAmountPokemon: (state, action) => {
      state.maxAmountPokemonsReached = action.payload;
    }
  },
});

export const {setPokemonCaptured, setMaxAmountPokemon} = mapSlice.actions;

export const selectPokemonCaptured = state => state.map.pokemonCaptured;

export const selectMaxAmountPokemonsReached = state => state.map.maxAmountPokemonsReached;

export default mapSlice.reducer;