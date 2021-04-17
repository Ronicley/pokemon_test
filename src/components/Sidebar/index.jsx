import React, {useEffect, useState} from "react";

import Button from "components/Button";

import iconPlus from "assets/images/plus.png";

import * as S from "./styled";
import {selectPokemonCaptured, setMaxAmountPokemon} from "../../pages/Map/mapSlice";
import {useDispatch, useSelector} from "react-redux";

const Sidebar = () => {
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const pokemon = useSelector(selectPokemonCaptured);
  const dispatch = useDispatch();

  useEffect(() => {
    if (capturedPokemons.length < 6) {
      if (pokemon !== null) setCapturedPokemons([...capturedPokemons, pokemon]);
    } else {
      console.log("e");
      dispatch(setMaxAmountPokemon(true));
    }
  }, [pokemon]);

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {
          capturedPokemons.length === 0 ? (
            <S.SideBarItem>?</S.SideBarItem>
          ) : (
            capturedPokemons.map((item, index) => {
              return (
                <S.SideBarItem key={index}>
                  <S.PokemonImg src={item?.sprites?.front_default} alt="Pokemon captured"/>
                </S.SideBarItem>
              );
            })
          )
        }
      </S.SideBarList>

      <Button icon={iconPlus}/>
    </S.SideBarWrapper>
  );
};

export default Sidebar;
