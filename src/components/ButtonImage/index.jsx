import React from "react";

import * as Style from "./styled";
import camera from "../../assets/images/camera.png";
import plus from "../../assets/images/plus.png";

// eslint-disable-next-line react/prop-types
const ButtonImage = ({ onClick }) => {
    return (
        <Style.ButtonWrapper onClick={onClick}>
            <Style.Icon src={camera} />
            <Style.IconPlus src={plus} width="13.33" height="13.33" />
        </Style.ButtonWrapper>
    );
};

export default ButtonImage;
