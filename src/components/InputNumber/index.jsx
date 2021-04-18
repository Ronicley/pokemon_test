import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

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

InputNumber.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  suffix: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number,
  onBlur: PropTypes.func
};

export default InputNumber;
