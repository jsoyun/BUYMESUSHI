import React from "react";
import styled from "styled-components";

import { ActiveItem } from "react-scroll-slider";

// import Content from "../Content";
// import imageUrl from "img/gif/aboutpoint.gif";


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

const Aboutpoint = () => (
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
        src="img/about/aboutpoint.gif"
        alt="" />
    </ActiveItem>

    <ActiveItem
      forwardStyle={forwardStyleContent}
      backwardStyle={backwardStyleContent}
    >
      <Description>
        UsEarth에서 환경보전에 동참해 주시면 준비된 상품들과 교환할 수 있는 포인트를 제공해 드립니다.
        추후 블록체인 기술을 활용한 인증 기술을 도입하고
        해당 포인트도 추후 블록체인 기술을 활용한 Earth 코인으로 대체될 예정입니다.
        블록체인을 통한 안전한 거래와 스마트 컨트랙트를 통한 환경 가치 거래를  체험해보세요.
        자세한 포인트 획득 방법과 사용 방법은 아래에서 설명해드릴게요.
      </Description>
    </ActiveItem>
  </Wrapper>
);

export default Aboutpoint;
