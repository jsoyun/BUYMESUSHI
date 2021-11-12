import React from "react";
import styled from "styled-components";
import { PartnersItem } from "../../../data";

const PartnersHead = styled.h1``;
const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  --border-radius: 0.7rem;
  --transition-time: 0.3s;

  position: relative;
  padding-top: 56.25%;
  background: linear-gradient(0deg, #1e1f2a 0%, #2f313d 67%);
  box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 16px 17px -5px #000000;
  cursor: pointer;
  transition: all var(--transition-time);
  border-radius: var(--border-radius);
`;
const Partner = styled.div``;
const LogoImage = styled.div``;
const Image = styled.img``;

const PartnersPage = () => {
  return (
    <>
      <PartnersHead>usEarth Partners</PartnersHead>
      <Container>
        <Wrapper columns={5}>
          {PartnersItem.map((item) => (
            <Partner bg={item.bg} key={item.id}>
              <LogoImage>
                <Image src={item.image} />
              </LogoImage>
            </Partner>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default PartnersPage;
