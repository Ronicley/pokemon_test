import React, {useState, useEffect} from 'react';

import * as Style from "./styled";
import closeIcon from '../../assets/images/close.png'

const Modal = ({head, body, open = false}) => {
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    setModalOpened(open)
  }, [open])

  return (
    modalOpened &&
    <Style.Container>
      <Style.ModalBody>
        <Style.CloseButton
          onClick={
            () => setModalOpened(false)
          }
          src={closeIcon}
        />
        <Style.ModalHeader>
          {head}
        </Style.ModalHeader>
        <Style.ModalContent>
          {body}
        </Style.ModalContent>
      </Style.ModalBody>
    </Style.Container>
  )
};

export default Modal