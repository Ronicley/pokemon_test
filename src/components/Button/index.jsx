import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const Button = ({text, icon, onClick, onlyIcon}) => (
  <S.ButtonWrapper
    className={`${icon ? "icon" : ""}`}
    onClick={onClick}
    onlyIcon={onlyIcon}
  >
    {icon ? <S.Icon src={icon}/> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  onlyIcon: PropTypes.bool
};

export default Button;
