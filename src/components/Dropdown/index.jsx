import React from "react";

import PropTypes from "prop-types";

import chevron from "assets/images/chevronDownBlack.png";

import * as S from "./styled";

const DropdownPage = ({label, name, options, onChange, onBlur, value}) => (
  <S.DropdownWrapper>
    {label && <S.Label>{label}</S.Label>}

    <S.DropdownContent>
      <S.Select onChange={onChange} name={name} onBlur={onBlur} value={value}>
        <S.DropdownOption value="">
          Selecione o(s) tipo(s)
        </S.DropdownOption>
        {options &&

        options.map((option, index) => (
          <S.DropdownOption key={index} value={option.value}>
            {option.text}
          </S.DropdownOption>
        ))}
      </S.Select>
      <S.DropdownIcon src={chevron} alt="Chevron"/>
    </S.DropdownContent>
  </S.DropdownWrapper>
);

DropdownPage.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string
};

export default DropdownPage;
