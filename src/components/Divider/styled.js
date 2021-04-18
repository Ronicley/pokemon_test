import styled from "styled-components";

export const Container = styled.div`
  ${props => props.position !== null ? `position: ${props.position};` : ""}
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #2e3a59;
  margin-left: 12px;
  margin-right: 12px;
`;

export const RightBar = styled.div`
  background-color: #c5cee0;
  height: 0.5px;
  width: 100%;
`;

export const LeftBar = styled.div`
  background-color: #c5cee0;
  height: 0.5px;
  width: 100%;
`;