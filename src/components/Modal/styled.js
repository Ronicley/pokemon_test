import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.35);
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
  position: relative;
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
  height: 559px;
  width: 360px;
  z-index: 999;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-radius: 8px;
`;

export const ModalContent = styled.div`
  position: relative;
  height: 70%;
  width: 100%;
  background: #F7F9FC;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px 24px 8px 8px;
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 12px;
  top: 12px;
  border-radius: 100%;
  width: 38px;
  height: 38px;
  background-color: white;
  padding: 9.5px;
  border: 2px #8F9BB3 solid;
`;