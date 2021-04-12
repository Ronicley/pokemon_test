import React, {useState} from "react";

import Sidebar from "components/Sidebar";

import * as Style from "./styled";

import ashFront from '../../assets/images/ashFront.png'
import searchTooltip from '../../assets/images/searchTooltip.png'

const MapPage = () => {
  const [showTip, setShowTip] = useState(false)

  const openTip = () => setShowTip(true)

  const closeTip = () => setShowTip(false)

  return (
    <Style.MapWrapper className="map">

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
