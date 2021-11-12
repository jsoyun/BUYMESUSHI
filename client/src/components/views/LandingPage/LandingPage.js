import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import SliderPage from "../SliderPage/SliderPage";
import ApiPage from "../ApiPage/ApiPage.js";
import NewsApi from "../NewsPage/NewsApi";
import PartnersPage from "../PartnersPage/PartnersPage";

const LandingPage = (props) => {
  // paging은 App.js에서 라우팅하는 방식으로 해결.
  // main 첫페이지는 헤더와 두개의 컴포넌트로 구성(SliderPage(사진 뜨는), ApiPage(아래 네브바처럼))
  // main 두번째 페이지도 헤더와 두개의 컴포넌트로 구성(추후 회의)
  // axios로 api 불러와놓고

  return (
    <div>
      <SliderPage />
      <ApiPage />
      <br />
      <NewsApi />
      <PartnersPage />
    </div>
  );
};

export default withRouter(LandingPage);
