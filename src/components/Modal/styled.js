import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999999;
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
    margin-top: 32px;
`;

export const ModalBody = styled.div`
    position: relative;
    background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
    height: 559px;
    width: 360px;
    z-index: 999;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    display: flex;
    border-radius: 8px;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ModalContent = styled.div`
    margin-bottom: -80px;
    position: relative;
    width: 100%;
    background: #f7f9fc;
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
    border: 2px #8f9bb3 solid;
`;

export const ActionsContainer = styled.div`
    position:sticky;
    bottom: 15px;   
`;
