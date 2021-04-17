import React, {useEffect, useState} from "react";

import Sidebar from "components/Sidebar";

import * as Style from "./styled";

import ashFront from "../../assets/images/ashFront.png";
import searchTooltip from "../../assets/images/searchTooltip.png";
import Modal from "../../components/Modal";
import {useDispatch, useSelector} from "react-redux";
// eslint-disable-next-line no-unused-vars
import {selectPokemonCapturedDetails, setPokemonCapturedDetails} from "./mapSlice";

const MapPage = () => {
  const [showTip, setShowTip] = useState(false);
  const pokemonDetails = useSelector(selectPokemonCapturedDetails);
  const [openModal, setOpenModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const openTip = () => setShowTip(true);

  const closeTip = () => setShowTip(false);

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    if (pokemonDetails) {
      handleOpenModal();
    }

  }, [pokemonDetails]);

  return (
    <Style.MapWrapper className="map">
      <Modal open={openModal} onClose={handleCloseModal}/>

      <Style.ModalAvatar>
        {showTip && <img src={searchTooltip} alt="search tooltip"/>}
      </Style.ModalAvatar>

      <img
        onMouseEnter={openTip}
        onMouseLeave={closeTip}
        onClick={handleOpenModal}
        src={ashFront}
        alt="Ash"
      />

      <Sidebar/>
    </Style.MapWrapper>
  );
};

export default MapPage;
