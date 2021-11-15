import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import SeaTempApiModalItem from "./SeaTempApiModalItem";
import Button from '@mui/material/Button';

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
      <Button variant="contained" size="large" onClick={() => setModalIsOpen(true)}>지면 온도 변화</Button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Container>
          <SeaTempApiModalItem />
        </Container>
        <button onClick={() => setModalIsOpen(false)}>X 모달 닫기 X</button>
      </Modal>
    </>
  );
}

Modal.setAppElement("#root");