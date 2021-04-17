import {createSlice} from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    pokemonCaptured: null,
    maxAmountPokemonsReached: false,
    pokemonCapturedDetails: null,
  },
  reducers: {
    setPokemonCaptured: (state, action) => {
      state.pokemonCaptured = action.payload;
    },
    setMaxAmountPokemon: (state, action) => {
      state.maxAmountPokemonsReached = action.payload;
    },
    setPokemonCapturedDetails: (state, action) => {
      state.pokemonCapturedDetails = action.payload;
    }
  },
});

export const {setPokemonCaptured, setMaxAmountPokemon, setPokemonCapturedDetails} = mapSlice.actions;

export const selectPokemonCaptured = state => state.map.pokemonCaptured;

export const selectMaxAmountPokemonsReached = state => state.map.maxAmountPokemonsReached;

export const selectPokemonCapturedDetails = state => state.map.pokemonCapturedDetails;

export default mapSlice.reducer;