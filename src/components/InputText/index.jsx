import React from "react";

import * as S from "./styled";

// eslint-disable-next-line react/prop-types
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

export default InputText;
