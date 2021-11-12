import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import GreenHouseApiModalItem from "./GreenHouseApiModalItem";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: row;
  flex-wrap: nowrap;
  float: left;
`;

export default function SeaTempApiModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>한국 온실가스 배출 변화</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Container>
          <GreenHouseApiModalItem />
        </Container>
        <button onClick={() => setModalIsOpen(false)}>X 모달 닫기 X</button>
      </Modal>
    </>
  );
}

Modal.setAppElement("#root");