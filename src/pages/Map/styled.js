import styled from "styled-components";

import img from "assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const ModalAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  margin-bottom:150px;
`
