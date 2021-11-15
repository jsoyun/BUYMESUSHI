import React from "react";
import Aboutme from "./Aboutme";
import Aboutpoint from "./Aboutpoint";
import Aboutget from "./Aboutget";
import Aboutuse from "./Aboutuse";
import Aboutcoin from "./Aboutcoin";
import { Carousel } from "react-scroll-slider";

const About = () => (
    <Carousel>
        <Aboutme />
        <Aboutpoint />
        <Aboutget />
        <Aboutuse />
        <Aboutcoin />
    </Carousel>
);

export default About;