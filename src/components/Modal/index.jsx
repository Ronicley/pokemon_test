import React from "react";

import * as Style from "./styled";
import closeIcon from "../../assets/images/close.png";
import Loading from "../Loading";

// eslint-disable-next-line react/prop-types
const Modal = ({open = false, onClose, img, body, actions, loading = false}) => (
  open && (
    <Style.Container>
      {
        loading ? (
          <Loading/>
        ) : (
          <Style.ModalBody>
            <Style.CloseButton onClick={onClose} src={closeIcon}/>
            <Style.ModalHeader>
              {img}
            </Style.ModalHeader>
            <Style.ModalContent>
              {body}
            </Style.ModalContent>
            <Style.ActionsContainer>
              {actions}
            </Style.ActionsContainer>
          </Style.ModalBody>
        )
      }
    </Style.Container>
  )
);


export default Modal;
