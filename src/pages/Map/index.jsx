import React, {useEffect, useState} from "react";
import Sidebar from "components/Sidebar";
import * as Style from "./styled";
import ashFront from "../../assets/images/ashFront.png";
import searchTooltip from "../../assets/images/searchTooltip.png";
import Modal from "../../components/Modal";
import {useDispatch, useSelector} from "react-redux";
import {
  selectPokemonCapturedDetails,
  setPokemonCapturedDetails,
  selectPokemonList,
  setPokemonList,
  removePokemonFromList
} from "./mapSlice";
import {getRandomicPokemon} from "./MapService";
import {useAlert} from "react-alert";
import Features from "../../components/features";
import pokeball from "../../assets/images/pokeball.png";
import Button from "../../components/Button";

const MapPage = () => {
  const [showTip, setShowTip] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState({});

  const alert = useAlert();
  const dispatch = useDispatch();
  const pokemonDetails = useSelector(selectPokemonCapturedDetails);
  const pokemonList = useSelector(selectPokemonList);

  const handleCapturePokemon = () => {
    pokemon.captured = true;
    dispatch(setPokemonList(pokemon));
  };

  const openTip = () => setShowTip(true);

  const closeTip = () => setShowTip(false);

  const handleGetPokemon = async () => {
    await getPokemon();
    handleOpenModal();
  };

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

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

  const handleLiberatePokemon = () => {
    dispatch(removePokemonFromList({id: pokemonDetails.id}));
    handleCloseModal();
  };

  useEffect(() => {
    if (pokemonDetails) {
      handleOpenModal();
      setPokemon(pokemonDetails);
    }
  }, [pokemonDetails]);

  useEffect(() => {
    if (!openModal) {
      dispatch(setPokemonCapturedDetails(null));
    }
  }, [openModal]);

  return (
    <Style.MapWrapper className="map">
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        loading={loading}
        img={
          pokemon?.sprites && (
            <img
              src={pokemon?.sprites?.front_default}
              width={200}
              alt="Pokemon Sprite"
            />
          )
        }
        body={
          pokemon.stats && (
            <Features
              height={pokemon.height}
              hp={pokemon.stats[0].base_stat}
              weight={pokemon.weight}
              name={pokemon.name}
              abilities={pokemon.abilities}
              types={pokemon.types}
              isCaptured={!!pokemon?.captured}
              id={pokemon.id}
            />
          )
        }
        actions={
          pokemonDetails ? (
            <Button
              text="Liberar pokemon"
              onClick={handleLiberatePokemon}
            />
          ) : (
            <Button
              icon={pokeball}
              onClick={
                () => {
                  if (pokemonList.length <= 5) {
                    handleCapturePokemon();
                    handleCloseModal();
                  } else {
                    alert.info("Quantidade máxima de pokemons atinginda");
                  }
                }
              }
            />
          )

        }
      />

      <Style.ModalAvatar>
        {showTip && <img src={searchTooltip} alt="search tooltip"/>}
      </Style.ModalAvatar>

      <img
        onMouseEnter={openTip}
        onMouseLeave={closeTip}
        onClick={handleGetPokemon}
        src={ashFront}
        alt="Ash"
      />

      <Sidebar/>
    </Style.MapWrapper>
  );
};

export default MapPage;
