import React, { useState } from "react";

import Sidebar from "components/Sidebar";

import * as Style from "./styled";

import ashFront from "../../assets/images/ashFront.png";
import searchTooltip from "../../assets/images/searchTooltip.png";
import Modal from "../../components/Modal";

const MapPage = () => {
    const [showTip, setShowTip] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    const openTip = () => setShowTip(true);

    const closeTip = () => setShowTip(false);

    const handleOpenModal = () => setOpenModal(true);

    const handleCloseModal = () => setOpenModal(false);

    return (
        <Style.MapWrapper className="map">
            <Modal open={openModal} onClose={handleCloseModal} />

            <Style.ModalAvatar>
                {showTip && <img src={searchTooltip} alt="search tooltip" />}
            </Style.ModalAvatar>

            <img
                onMouseEnter={openTip}
                onMouseLeave={closeTip}
                onClick={handleOpenModal}
                src={ashFront}
                alt="Ash"
            />

            <Sidebar />
        </Style.MapWrapper>
    );
};

export default MapPage;
