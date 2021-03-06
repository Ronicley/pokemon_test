import React from "react";
import PropTypes from "prop-types";
import * as Style from "./styled";
import camera from "../../assets/images/camera.png";
import plus from "../../assets/images/plus.png";


const ButtonImage = ({onClick}) => {
  return (
    <Style.ButtonWrapper onClick={onClick}>
      <Style.Icon src={camera}/>
      <Style.IconPlus src={plus} width="13.33" height="13.33"/>
    </Style.ButtonWrapper>
  );
};

ButtonImage.propTypes = {
  onClick: PropTypes.func
};

export default ButtonImage;
