import React from "react";

import * as Style from "./styled";
import pokemonImg from "../../assets/images/pokemonLogo.png"
import Button from "../../components/Button";
import {useHistory} from 'react-router-dom'
import {MAP_ROUTER} from '../../constants'

const HomePage = () => {
  const history = useHistory()

  const navigateToMap = () => {
    history.push(MAP_ROUTER)
  }

  return (
    <Style.HomeWrapper>
      <img src={pokemonImg} alt="Pokemon logo"/>
      <Style.ContainerButton>
        <Button onClick={navigateToMap} text="START"/>
      </Style.ContainerButton>
    </Style.HomeWrapper>
  )
};

export default HomePage;
