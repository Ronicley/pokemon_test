import styled from "styled-components";

export const SideBarWrapper = styled.aside`
  background-color: transparent;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
`;

export const ModalWrapper = styled.aside`
  position: absolute;
  top: -20px;
  left: -20px;
`;

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SideBarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  border: 4px solid #004a45;
  border-radius: 12.8rem;
  font-size: 4rem;
  font-weight: bold;
  color: #004a45;
  cursor: pointer;
  transition: all 0.2s;
  background-color: #00d68f;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    background-color: #004a45;
    color: #00d68f;
  }

  &:not(last-of-type) {
    margin-bottom: 1.6rem;
  }
`;

export const PokemonImg = styled.img`
  width: 6.3rem;
  height: 6.3rem;
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
    left: 131px;
    top: 50%;
    transform: translateX(-100%);
  }

  &:after {
    content: '';
    height: 1px;
    width: 128.5px;
    background-color: #c5cee0;
    position: absolute;
    right: 131px;
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

export const Form = styled.form`
  position: relative;
  width: 100%;
  margin: 130px 20px 0 20px;
`;

export const LabelContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #2E3A59;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;