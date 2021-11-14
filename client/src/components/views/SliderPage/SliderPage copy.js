// 슬라이더 페이지
// 이 안에는 사진과 정보를 담은 컴포넌트 하나랑
// api를 보여주는 컴포넌트 하나가 있다.
// cf) api 보여주는 컴포넌트 안에도 컴포넌트를 넣을 예정.
// 사진도 넣고 설명도 넣고
//(데이터 파일을 하나 만들어서 데이터 정보 때려박아넣고 불러오는걸로..styled component로 div 커스텀하기)
import { useState } from "react";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../../../data";
// import Axios from "axios";

const Container = styled.div`
  width: 100%;
  height: vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 80%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 75vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;
  margin-bottom: 75px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

// const NewsItem = styled.div``;

const SliderPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const getArticles = async () => {
  //     const res = await Axios.get(
  //       "GET https://newsapi.org/v2/top-headlines?country=us&apiKey=55ee2d88a6d74797b9d1dead15f2b8d5"
  //     );
  //     setArticles(res.data.articles)
  //     console.log(res);
  //   };
  //   getArticles();
  // });

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowBackIosRounded />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>더보기</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowForwardIosRounded />
        </Arrow>
      </Container>
      {/* <NewsItem></NewsItem> */}
    </>
  );
};

export default SliderPage;
