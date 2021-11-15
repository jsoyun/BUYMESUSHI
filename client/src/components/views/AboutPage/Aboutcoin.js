import React from "react";
import styled from "styled-components";
import { ActiveItem } from "react-scroll-slider";

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

const forwardStyleContent = { transform: "scale(.5)", opacity: 0 };
const backwardStyleContent = { transform: "scale(2)", opacity: 0 };

const Aboutcoin = () => (
  <Wrapper>
    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Description>
        Earth 가상화폐를 활용해서 친환경 기술을 이용/개발하는 기업에 크라우드 펀딩이 가능할 수 있도록 할 예정.
        크라우드 펀딩 뿐 아니라 UsEarth와 제휴한 생활서비스, 관광, 호텔, 병원 등의 업체에서도 결제할 수 있게 할 예정.
      </Description>
    </ActiveItem>

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
        src="img/about/aboutcoin.gif"
        alt="" />
    </ActiveItem>
  </Wrapper>
);

export default Aboutcoin;
