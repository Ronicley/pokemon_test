import React, {useEffect, useState} from "react";

import Sidebar from "components/Sidebar";

import * as Style from "./styled";

import ashFront from '../../assets/images/ashFront.png'
import searchTooltip from '../../assets/images/searchTooltip.png'
import Modal from "../../components/Modal";
import ButtonImage from "../../components/ButtonImage";
import {getRandomicPokemon} from "./MapService";
import Features from "../../components/features";

const MapPage = () => {
  const [showTip, setShowTip] = useState(false);
  const [pokemon, setPokemon] = useState({});

  const openTip = () => setShowTip(true)

  const closeTip = () => setShowTip(false)

  const getPokemon = async () => {
    let {data} = await getRandomicPokemon();
    console.log(data)
    setPokemon(data);
  }

  useEffect(() => {
    getPokemon().then()
  }, [])


  return (
    <Style.MapWrapper className="map">

      <Modal
        head={
          <>
            {
              pokemon?.sprites && <img src={pokemon?.sprites?.front_default} width={200} alt="Pokemon Sprite"/>
            }

            {/*<ButtonImage/>*/}
          </>
        }
        body={
          pokemon.stats&&<Features height={pokemon.height} hp={pokemon.stats[0].base_stat} weight={pokemon.weight}/>
        }
        open={true}
      />

      <Style.ModalAvatar>
        {
          showTip && (
            <img src={searchTooltip} alt="search tooltip"/>
          )
        }
      </Style.ModalAvatar>

      <img onMouseEnter={openTip} onMouseLeave={closeTip} src={ashFront} alt="Ash"/>
      <Sidebar/>

    </Style.MapWrapper>
  )
};

export default MapPage;
