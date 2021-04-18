import React, {useEffect, useState} from "react";
import * as Style from "./styled";
import Types from "../PokemonTypes";
import Divider from "../Divider";
import PropTypes from "prop-types";
import editIcon from "../../assets/images/editIcon.png";
import checkIcon from "../../assets/images/checkIcon.png";
import closeIcon from "../../assets/images/close.png";
import {useDispatch} from "react-redux";
import {updatePokemonName} from "../../pages/Map/mapSlice";

const Features = ({weight, height, hp, name, abilities, types, isCaptured = false, id}) => {
  const [pokemonTypes, setPokemonTypes] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [pokemonName, setPokemonName] = useState(name);

  const dispatch = useDispatch();

  const handleEditPokemonName = () => setShowInput(!showInput);

  const handleCancelEditPokemonName = () => setShowInput(false);

  const handleSavePokemon = () => {
    dispatch(updatePokemonName({id: id, pokemonName}));
    handleCancelEditPokemonName();
  };

  useEffect(() => {
    let finalString = "";

    abilities.forEach((element) => {
      finalString += element.ability.name + ", ";
    });

    setPokemonTypes(finalString);
  }, [abilities]);

  return (
    <Style.Container>
      <Style.PokemonName>
        {pokemonName}
        {isCaptured && <Style.IconButton src={editIcon} onClick={handleEditPokemonName}/>}
      </Style.PokemonName>
      {
        showInput && (
          <Style.PokemonEditName>
            <Style.InputTextCustom
              name="pokemonName"
              placeholder="Nome"
              value={pokemonName}
              onChange={(e) => setPokemonName(e.target.value)}
            />
            <Style.ButtonAction onClick={handleSavePokemon}>
              <img src={checkIcon} alt={"Salvar"}/>
            </Style.ButtonAction>
            <Style.ButtonAction onClick={handleCancelEditPokemonName}>
              <img src={closeIcon} alt={"Cancelar"} width={15}/>
            </Style.ButtonAction>
          </Style.PokemonEditName>
        )
      }
      <Style.Row>
        <Style.Column>
          <Style.Label>HP</Style.Label>
          {hp}/{hp}
        </Style.Column>
        <Style.Divider/>
        <Style.Column>
          <Style.Label>ALTURA</Style.Label>
          {height}
        </Style.Column>
        <Style.Divider/>
        <Style.Column>
          <Style.Label>PESO</Style.Label>
          {weight}
        </Style.Column>
      </Style.Row>
      <Divider position="relative" text="TIPO"/>
      <Style.Column>
        <Style.Row>
          <Types type={types}/>
        </Style.Row>
      </Style.Column>
      <Divider position="relative" text="HABILIDADES"/>
      <Style.Column>
        <Style.Row>
          <Style.PokemonTypeText>
            {pokemonTypes.slice(0, -2)}
          </Style.PokemonTypeText>
        </Style.Row>
      </Style.Column>
    </Style.Container>
  );
};

Features.propTypes = {
  weight: PropTypes.number,
  height: PropTypes.number,
  hp: PropTypes.number,
  name: PropTypes.string,
  abilities: PropTypes.array,
  types: PropTypes.array,
  isCaptured: PropTypes.bool,
  id: PropTypes.number
};

export default Features;
