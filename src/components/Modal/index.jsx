import React from "react";
import PropTypes from "prop-types";
import * as Style from "./styled";
import closeIcon from "../../assets/images/close.png";
import Loading from "../Loading";


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

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  img: PropTypes.object,
  body: PropTypes.element,
  actions: PropTypes.element,
  loading: PropTypes.bool
};

export default Modal;
