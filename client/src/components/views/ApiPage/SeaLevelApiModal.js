import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import SeaLevelApiModalItem from "./SeaLevelApiModalItem";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: row;
  flex-wrap: nowrap;
  float: left;
  border: 1px solid blue;
`;

export default function SeaLevelApiModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>시간의 흐름에 따른 해수면 높이 변화</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Container>
          <SeaLevelApiModalItem />
        </Container>

        <button onClick={() => setModalIsOpen(false)}>X 모달 닫기 X</button>
      </Modal>
    </>
  );
}

Modal.setAppElement("#root");
