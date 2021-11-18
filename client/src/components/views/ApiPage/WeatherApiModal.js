// issue: 첫번째 모달은 주변이 불투명하게 되는데 두번째 꺼부터는 그냥 하얗게 보임.
import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import WeatherApiModalItem from "./WeatherApiModalItem";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: row;
  flex-wrap: nowrap;
  float: left;
`;

const customStyles = {
  content: {
    width: "52vw",
    height: "82vh",
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
    backgroundColor: "rgba(118, 135, 163, 0.75)",
  },
};

export default function WeatherApiModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={() => setModalIsOpen(true)}
      >
        전세계 도시별 날씨
      </Button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <CloseIcon
          onClick={() => setModalIsOpen(false)}
          color="action"
          fontSize="large"
          cursor="pointer"
        ></CloseIcon>
        <Container>
          <WeatherApiModalItem />
        </Container>
      </Modal>
    </>
  );
}

Modal.setAppElement("#root");
