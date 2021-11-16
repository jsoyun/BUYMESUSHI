import React from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import styled from "styled-components";
import WeatherApiModal from "./WeatherApiModal";
import SeaTempApiModal from "./SeaTempApiModal";
import GreenHouseApiModal from "./GreenHouseApiModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ApiPage({ sliders }) {
  const settings = {
    className: "center",
    // 마지막꺼 다음에 첫번째꺼 오게 해서 무한 슬라이드 가능
    infinite: true,
    // 슬라이드 끝이 안 짤릴 수 있게
    centerPadding: "0px",
    // 한번에 보여줄 개수
    slidesToShow: 2,
    // 드래그해서 슬라이드 가능
    swipeToSlide: true,
    arrow: true,
    centerMode: true,

    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  // 슬라이드 CSS 커스텀
  const Container = styled.div`
    width: 100%;
    background-color: black;
  `;

  const StyledSlider = styled(Slider)`
    .slick-list {
      width: 95vw;
      margin: 0;
      background-color: black;
    }

    .slick-slide div {
      /* align-items: center; */
      text-align: center;
      background-color: black;
      /* border: 2px #5c75bb; */
    }

    .slick-dots {
      bottom: -50px;
      margin-top: 200px;
    }

    .slick-track {
      /* overflow-x: hidden; */
    }
  `;

  return (
    <Container>
      <div
        style={{
          paddingLeft: "35px",
          paddingRight: "35px",
          paddingTop: "18px",
          paddingBottom: "18px",
        }}
      >
        <StyledSlider {...settings}>
          {/* ApiPageModal이라는 컴포넌트를 가져왔는데 이건 map 함수 써서 반복되게 해야 하나... */}
          <div>
            <WeatherApiModal />
          </div>
          <div>
            <SeaTempApiModal />
          </div>
          <div>
            <GreenHouseApiModal />
          </div>
        </StyledSlider>
      </div>
    </Container>
  );
}

Modal.setAppElement("#root");

export default ApiPage;
