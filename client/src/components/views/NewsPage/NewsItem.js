// 뉴스 기사 맵핑
import React from "react";
import styled from "styled-components";
// import { CarouselWrapper } from "react-pretty-carousel";

const Item = styled.div`
  position: relative;
  width: 364px;
  height: 420px;
  border: 7px solid #3b5998;
  background-color: black;
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  float: left;
`;

const NewsImg = styled.img`
  width: 352px;
  height: 200px;
  position: absolute;
  background-position: center;
`;

const Headline = styled.a`
  width: 330px;
  height: 50px;
  position: absolute;
  margin-top: 215px;
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  font-size: 18px;
`;

const Desc = styled.div`
  position: absolute;
  width: 330px;
  height: 30px;
  color: white;
  margin-top: 295px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
`;

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <Item>
      <NewsImg src={urlToImage} alt="NewImage" />
      <Headline href={url}>{title}</Headline>
      <Desc>{description}</Desc>
    </Item>
  );
};

export default NewsItem;
