import React from "react";
import * as S from "./styled";
import PropTypes from "prop-types";

const possiblePositions = "relative" || "absolute" || "fixed" || "static" || "sticky";

const Divider = ({text, position = possiblePositions}) => (
  <S.Container position={position}>
    <S.LeftBar/>
    <S.Content>{text}</S.Content>
    <S.RightBar/>
  </S.Container>
);

Divider.propTypes = {
  text: PropTypes.string,
  position: PropTypes.string
};

export default Divider;