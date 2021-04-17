import React from "react";

import * as S from "./styled";

// eslint-disable-next-line react/prop-types
const Button = ({ text, icon, onClick, onlyIcon }) => (
    <S.ButtonWrapper
        className={`${icon ? "icon" : ""}`}
        onClick={onClick}
        onlyIcon={onlyIcon}
    >
        {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
    </S.ButtonWrapper>
);

export default Button;
