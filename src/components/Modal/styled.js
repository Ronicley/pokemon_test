import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalHeader = styled.div`
  background: white;
  min-height: 247px;
  min-width: 247px;
  border-radius: 100%;
  position: relative;
  display: flex; 
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: rgba(0, 214, 143, 0.48);
  margin-bottom: -100px;
  z-index: 2;
  margin-top: 32px
`;

export const ModalBody = styled.div`
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
  height: 60vh;
  width: 40vh;
  z-index: 999;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-radius: 3%;
`;

export const ModalContent = styled.div`
  position: relative;
  height: 70%;
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10% 10% 3% 3%;
`;