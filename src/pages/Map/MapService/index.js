import axios from "../../../services/axios.wrapper";

const getRndInteger = () => {
  return Math.floor(Math.random() * (807 - 1 + 1) ) + 1;
}

export const getRandomicPokemon = async () => {
  try{
    return await axios.get(`pokemon/${getRndInteger()}`);
  }catch (e){
    console.error(e)
  }
}