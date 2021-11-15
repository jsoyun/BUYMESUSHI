import React from "react";
import styled from "styled-components";

import { ActiveItem } from "react-scroll-slider";

// import Content from "../Content";
// import imageUrl from "img/gif/trashhhhhh.gif";


const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Description = styled.div`
  height: 40%;
  width: 500px;
  display: flex;
  margin: 50px 30px;
  border: 2px solid skyblue;
  border-radius: 10px;
  padding: 20px 20px;
  background-color: #d9ecf3;
  font-size: 30px;
`;

const forwardStyleImage = { transform: "translateY(-100%)", opacity: 0 };
const backwardStyleImage = { transform: "translateY(100%)", opacity: 0 };

const forwardStyleContent = { transform: "translateX(100%)", opacity: 0 };
const backwardStyleContent = { transform: "translateX(-100%)", opacity: 0 };

const Aboutme = () => (
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
        src="img/about/trashhhhhh.gif"
        alt="" />
    </ActiveItem>

    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Description>
        <h2>푸른 하늘을 위한 오늘의 한 걸음</h2>
        UsEarth와 함께 환경보전에 동참해주세요.
        환경이 파괴됨에 따라 세계 기온 이상 상승, 극빙하의 급격한 감소, 해수면 상승 등의 문제가 생겨났습니다.
        일회용품 사용을 줄이고 출퇴근시 대중교통을 이용하는 등 개인의 노력이 모여 푸른 하늘을 만들 수 있습니다.
      </Description>
      <Description>
        <h2>하나뿐인 지구</h2>
        UsEarth는 국내외 유수 기업들의 후원으로 시작하게 되었습니다.
        79억 인구가 공유하는 하나뿐인 지구를 지켜주세요.
        기업과 국가뿐 아니라 우리 개인이 힘을 모아야 지구가 건강하게 유지될 수 있습니다.
      </Description>
    </ActiveItem>
  </Wrapper>
);

export default Aboutme;
