import styled from "styled-components";

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
