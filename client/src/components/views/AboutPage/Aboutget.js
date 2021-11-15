import React from "react";
import styled from "styled-components";

import { ActiveItem } from "react-scroll-slider";

// import Content from "../Content";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Description = styled.div`
  height: 90%;
  width: 500px;
  display: flex;
  margin: 50px 30px;
  border: 2px solid skyblue;
  border-radius: 10px;
  padding: 20px 20px;
  background-color: #d9ecf3;
  font-size: 30px;
`;

const forwardStyleImage = { transform: "translateX(-100%)", opacity: 0 };
const backwardStyleImage = { transform: "translateX(100%)", opacity: 0 };

const forwardStyleContent = {
  transform: "scale(.5) translateX(100%)",
  opacity: 0
};
const backwardStyleContent = {
  transform: "scale(2) translateY(100%)",
  opacity: 0
};

const Aboutget = () => (
  <Wrapper>
    <ActiveItem
      forwardStyle={forwardStyleImage}
      backwardStyle={backwardStyleImage}
    >
      <img
        style={{
          width: "1000px",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        src="img/about/tempaboutget.jpg"
        alt="" />
    </ActiveItem>

    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Description>"This is how to get point"</Description>
    </ActiveItem>
  </Wrapper>
);

export default Aboutget;
