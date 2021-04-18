import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const InputText = ({className, label, type, placeholder, name, onChange, onBlur, value}) => (
  <S.InputTextWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}
    <S.Input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  </S.InputTextWrapper>
);

InputText.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onBlur: PropTypes.func
};

export default InputText;
