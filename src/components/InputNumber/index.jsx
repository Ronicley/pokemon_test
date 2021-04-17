import React from "react";


import * as S from "./styled";

// eslint-disable-next-line react/prop-types
const InputNumber = ({ className, label, placeholder, name, suffix, onChange, value, onBlur }) => (
    <S.InputNumberWrapper className={className}>
        {label && <S.Label>{label}</S.Label>}

        <S.InputContent>
            <S.Input
                value={value}
                type="number"
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
            />

            {suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

        </S.InputContent>
    </S.InputNumberWrapper>
);

export default InputNumber;
