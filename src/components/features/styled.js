import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const Divider = styled.div`
  width: 1px;
  background-color: #C5CEE0;
`;

export const Label = styled.div`
  font-size: 12px;
`;