import React from "react";
import * as S from "./styled";
import PropTypes from "prop-types";

const Divider = ({text}) => {
  return (
    <S.Container>
      <S.LeftBar/>
      <S.Content>{text}</S.Content>
      <S.RightBar/>
    </S.Container>
  );
};

Divider.propTypes = {
  text: PropTypes.string
};

export default Divider;