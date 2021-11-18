import React, { useState } from "react";
import Modal from "react-modal";

import PropTypes from "prop-types";
import styled from "styled-components";
import GreenHouseApiModalItem from "./GreenHouseApiModalItem";
import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-grow: row;
  flex-wrap: nowrap;
  float: left;
`;

Modal.PropTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000; */
  overflow: auto;
  outline: 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 700px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const customStyles = {
  content: {
    width: "50vw",
    height: "40vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    // top: "0",
    // left: "0",
    // right: "0",
    // bottom: "0",
    backgroundColor: "rgba(750, 112, 698, 0.75)",
  },
};

export default function SeaTempApiModal(className, visible, children) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={() => setModalIsOpen(true)}
      >
        한국 온실가스 배출 변화
      </Button>
      {/* <ModalWrapper className={className} visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner"> */}
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <CloseIcon
          onClick={() => setModalIsOpen(false)}
          color="action"
          fontSize="large"
        ></CloseIcon>
        <Container>
          <GreenHouseApiModalItem />
        </Container>
      </Modal>
      {/* </ModalInner>
      </ModalWrapper> */}
    </>
  );
}

Modal.setAppElement("#root");
