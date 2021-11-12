// 메인 스크롤하면 2번째로 나오는 페이지
// NewsApi
import NewsItem from "./NewsItem";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsHead = styled.h1``;

function NewsApi({ sliders }) {
  const settings = {
    className: "center",
    // 마지막꺼 다음에 첫번째꺼 오게 해서 무한 슬라이드 가능
    infinite: true,
    // 슬라이드 끝이 안 짤릴 수 있게
    centerPadding: "0px",
    // 한번에 보여줄 개수
    slidesToShow: 4,
    // 드래그해서 슬라이드 가능
    swipeToSlide: true,
    arrow: true,
    // centerMode: true,
    dots: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",

  };


  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=55ee2d88a6d74797b9d1dead15f2b8d5"
      );
      setArticles(res.data.articles);
    };
    getArticles();
  }, [articles]);

  return (
    <>
      <NewsHead>News and Features</NewsHead>
      <Slider {...settings}>
        {articles.map(({ title, description, url, urlToImage }) => (
          <NewsItem
            key={articles.id}
            title={title}
            description={description}
            url={url}
            urlToImage={urlToImage}
          />
        ))}
      </Slider>
    </>
  );
}

export default NewsApi;
