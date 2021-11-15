import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  box-sizing: border-box;
  margin: 0;
  padding: auto;
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  display: flex;
  flex: 1;
  z-index: -1;
  size: "cover";
  position: absolute;
  width: 100vw;
  height: 100%;
  flex: 1;
  z-index: 2;
  overflow: hidden;
`;

const Infobox1 = styled.div`
  width: 22vw;
  height: 30vh;
  margin-left: 15%;
  display: inline-block;
  position: absolute;
  padding: 3em;
  background: rgba(69, 69, 69, 0.74);
  border-radius: 10px;
  z-index: 5;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;
const Infobox2 = styled.div`
  width: 22vw;
  height: 30vh;
  margin-left: 50%;
  display: inline-block;
  position: absolute;
  padding: 3em;
  background: rgba(69, 69, 69, 0.74);
  border-radius: 10px;
  z-index: 5;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;
const Infobox3 = styled.div`
  width: 52vw;
  height: 30vh;
  margin-left: 20%;
  margin-top: 27%;
  display: inline-block;
  position: absolute;
  padding: 3em;
  background: rgba(69, 69, 69, 0.74);
  border-radius: 10px;
  z-index: 5;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;
const About = () => {
  return (
    <Container>
      <Img src="img/gif/trashhhhhh.gif" style={{ width: "100vw" }} alt="" />
      <Infobox1>1</Infobox1>
      <Infobox2>2</Infobox2>
      <Infobox3>3</Infobox3>
    </Container>
  );
};

export default About;
