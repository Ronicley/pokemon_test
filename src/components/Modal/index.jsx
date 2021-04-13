import React from 'react';

import * as Style from "./styled";

const Modal = () => {

  return (
    <Style.Container>
      <Style.ModalBody>
        <Style.ModalHeader>
          <h1>Cabeça</h1>
        </Style.ModalHeader>
        <Style.ModalContent>
          <p>Corpo</p>
        </Style.ModalContent>
      </Style.ModalBody>
    </Style.Container>
  )
};

export default Modal