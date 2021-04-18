import styled from "styled-components";
import InputText from "../../components/InputText";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: calc(100% - 80px);
  margin-top: 100px;
`;

export const PokemonName = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #2e3a59;
  text-transform: uppercase;
  margin: 20px 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px 0 10px 0;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #2e3a59;
`;

export const Divider = styled.div`
  width: 1px;
  background-color: #c5cee0;
`;

export const Label = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #2e3a59;
`;

export const SectionTitle = styled.h3`
  background-color: #f7f9fc;
  padding: 0 12px;
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #2e3a59;

  &:before {
    content: '';
    height: 1px;
    width: 128.5px;
    background-color: #c5cee0;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateX(-100%);
  }

  &:after {
    content: '';
    height: 1px;
    width: 128.5px;
    background-color: #c5cee0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateX(100%);
  }
`;

export const SectionAbility = styled.h3`
  background-color: #f7f9fc;
  padding: 0 12px;
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #2e3a59;

  &:before {
    content: '';
    height: 0.5px;
    width: 92.5px;
    background-color: #c5cee0;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateX(-100%);
  }

  &:after {
    content: '';
    height: 0.5px;
    width: 92.5px;
    background-color: #c5cee0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateX(100%);
  }
`;

export const PokemonTypeText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: #2e3a59;
  margin-top: 16px;
`;

export const IconButton = styled.img`
  margin-left: 10px;
  padding: 2px;
  &:hover {
    background: #adadad;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const PokemonEditName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  margin-top: -20px;
`;

export const InputTextCustom = styled(InputText)`
  margin: 0;
  -webkit-box-shadow: 0 27px 43px 0 rgba(0,0,0,0.26);
  box-shadow: 0 27px 43px 0 rgba(0,0,0,0.26);
  background: transparent;
`;

export const ButtonAction = styled.button`
  min-width: 48px;
  min-height: 48px;
  border: none;
  background: #EDF1F7;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 3px;
  -webkit-box-shadow: 0 27px 43px 0 rgba(0,0,0,0.26);
  box-shadow: 0 27px 43px 0 rgba(0,0,0,0.26);

  &:hover {
    background: #c7c7d0;
  }
`;
