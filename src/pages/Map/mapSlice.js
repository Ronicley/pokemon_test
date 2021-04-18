import {createSlice} from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    pokemonList: [],
    pokemonCapturedDetails: null,
  },
  reducers: {
    setPokemonList: (state, action) => {
      state.pokemonList.push(action.payload);
    },
    removePokemonFromList: (state, action) => {
      state.pokemonList = state.pokemonList.filter((item) => item.id !== action.payload);
    },
    updatePokemonName: (state, action) => {
      let {pokemonName, id} = action.payload;
      state.pokemonList = state.pokemonList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name:pokemonName
          };
        }
      });
    },
    setPokemonCapturedDetails: (state, action) => {
      state.pokemonCapturedDetails = action.payload;
    }
  },
});

export const {
  setPokemonCapturedDetails,
  setPokemonList,
  removePokemonFromList,
  updatePokemonName
} = mapSlice.actions;

export const selectPokemonCapturedDetails = state => state.map.pokemonCapturedDetails;

export const selectPokemonList = state => state.map.pokemonList;

export default mapSlice.reducer;