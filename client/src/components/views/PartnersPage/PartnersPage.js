import React from "react";
import styled from "styled-components";
import { PartnersItem } from "../../../data";
import { useSpring, animated } from "react-spring";

const PartnersHead = styled.h1``;
const Container = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
`;
const Wrapper = styled.div`
    max-width: 100vw;
    height: 120px;
    padding: 3% 3%;
    position: relative;
    background: linear-gradient(0deg, #1e1f2a 0%, #2f313d 67%);
    box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 16px 17px -5px #000000;
    cursor: pointer;
`;
const Partner = styled.div`
    padding: 5px;
    position: absolute;
    background: #c7d2fe66;
    border-radius: 10px;
    z-index: 1;
    position: absolute;
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    background-clip: border-box;
    cursor: pointer;
`;

const Image = styled.img`
    width: 120px;
    height: 40px;
    justify-content: center;
    &:hover {
        display: none;
    }
`;

const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1,
];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const PartnersPage = () => {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 200, transition: 200, friction: 50 },
    }));
    return (
        <>
            <PartnersHead>UsEarth Partners</PartnersHead>
            <Container>
                <Wrapper columns={5}>
                    {PartnersItem.map((item) => (
                        <Partner bg={item.bg} key={item.id}>
                            <Image src={item.image} />
                        </Partner>
                    ))}
                </Wrapper>
            </Container>
        </>
    );
};

export default PartnersPage;
