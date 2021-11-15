import React, { Children } from "react";
import styled from "styled-components";
import { PartnersItem, Partners } from "../../../data";
// import { useSpring, animated, config } from "react-spring";

const PartnersHead = styled.h1`
  font-size: 36px;
  color: #555;
  text-align: center;
`;

const Hr = styled.hr`
  width: 10%;
  height: 5px;
  border: none;
  background: #26ccca;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 24vh;
  padding: 15px;
  margin-bottom: 10px;
  background-image: url("");
  flex-wrap: wrap;
`;

const Partner = styled.div`
  --border-radius: 0.7rem;
  width: 140px;
  height: 50px;
  /* position: absolute; */
  border: 2px solid transparent;
  backdrop-filter: blur(1px);
  cursor: pointer;
  margin: 20px 32px;
  box-shadow: 0px 7px 7px -5px #7a7a7a;
  transition: all var(--transition-time);
  border-radius: var(--border-radius);
  background-clip: border-box;
  background: #c7d2fe66;
  /* transition: 0.7s; */
  /* background: linear-gradient(0deg, #1e1f2a 0%, #2f313d 67%); */
`;

const Organization = styled.div`
  width: 140px;
  height: 50px;
  margin: 20px 32px;
`;

const Image = styled.img`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  margin-top: 10px;
  justify-content: center;
  position: absolute;
  &:hover {
    display: none;
  }
`;

const Image2 = styled.img`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  margin-top: 10px;
  transform: translateY(0);
  transition: 1s;
  &:hover {
    display: none;
  }
`;

const PartnersPage = () => {
  return (
    <>
      <PartnersHead>UsEarth Partners</PartnersHead>
      <Hr />
      <Container>
        {PartnersItem.map((item) => (
          <Partner key={item.id}>
            <Image src={item.image} />
            <Image2 src={item.image2} />
          </Partner>
        ))}
        {Partners.map((item) => (
          <Organization key={item.id}>
            <Image src={item.img} />
          </Organization>
        ))}
      </Container>
    </>
  );
};

export default PartnersPage;
