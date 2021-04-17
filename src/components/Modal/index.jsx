import React, {useState, useEffect} from "react";

import * as Style from "./styled";
import closeIcon from "../../assets/images/close.png";
import Button from "../Button";
import pokeball from "../../assets/images/pokeball.png";
import Features from "../features";
import {getRandomicPokemon} from "../../pages/Map/MapService";
import Loading from "../Loading";
import {useDispatch, useSelector} from "react-redux";
import {
  selectMaxAmountPokemonsReached,
  setPokemonCaptured,
  selectPokemonCapturedDetails
} from "../../pages/Map/mapSlice";
import {useAlert} from "react-alert";

// eslint-disable-next-line react/prop-types
const Modal = ({open = false, onClose}) => {
  const pokemonFull = useSelector(selectMaxAmountPokemonsReached);
  const pokemonDetails = useSelector(selectPokemonCapturedDetails);
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const alert = useAlert();

  const getPokemon = async () => {
    setLoading(true);
    try {
      let {data} = await getRandomicPokemon();
      setPokemon(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const handleCapturePokemon = () => {
    dispatch(setPokemonCaptured(pokemon));
  };

  useEffect(() => {
    if (open) {
      console.log(pokemonDetails);
      if (pokemonDetails) {
        setPokemon(pokemonDetails);
      } else {
        getPokemon().then();
      }

    }
  }, [open]);

  return (
    open && (
      <Style.Container>
        {
          loading ? (
            <Loading/>
          ) : (
            <Style.ModalBody>
              <Style.CloseButton onClick={onClose} src={closeIcon}/>
              <Style.ModalHeader>
                {
                  pokemon?.sprites && (
                    <img
                      src={pokemon?.sprites?.front_default}
                      width={200}
                      alt="Pokemon Sprite"
                    />
                  )
                }
              </Style.ModalHeader>
              <Style.ModalContent>
                {
                  pokemon.stats && (
                    <Features
                      height={pokemon.height}
                      hp={pokemon.stats[0].base_stat}
                      weight={pokemon.weight}
                      name={pokemon.name}
                      abilities={pokemon.abilities}
                      types={pokemon.types}
                    />
                  )
                }
              </Style.ModalContent>
              <Style.PokeballContaier>
                <Button
                  icon={pokeball}
                  onClick={() => {
                    if (!pokemonFull) {
                      handleCapturePokemon();
                      onClose();
                    } else {
                      alert.info("Quantidade máxima de pokemons atinginda");
                    }
                  }}
                />
              </Style.PokeballContaier>
            </Style.ModalBody>
          )
        }
      </Style.Container>
    )
  );
};

export default Modal;
