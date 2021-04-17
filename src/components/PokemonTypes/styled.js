import styled from "styled-components";

export const Type = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 42px;
    color: white;
    width: 98px;
    padding: 16px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 5px;
    text-align: center;
    text-transform: uppercase;
    margin-left: 5px;
    margin-right: 5px;
`;

export const Box = styled.div`
    display: flex;
    width: 208px;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
`;
