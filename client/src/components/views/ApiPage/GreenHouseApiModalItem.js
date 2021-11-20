// npm install axios chart.js react-chartjs-2 --save 로 axios와 차트js 모듈2개까지 총 세개 모듈 설치

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  background-color: white;
  margin-left: 100px;
`;

const SeaTempApiModalItem = () => {
  const [tempData, setTempData] = useState({});

  // useEffect를 쓴 이유 : fetch함수를 통해 API를 계속 불러오는 것을 방지하여 속도 향상, useState 값이 변경되면 업데이트 해주기 위해.
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(
        "https://postman-open-technologies.github.io/environment/apis/green-house-gases/emissions-per-country/?code=KOR"
      );
      makeData(res.data);
    };
    const makeData = (items) => {
      const arr = items.reduce((acc, cur) => {
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const emissions = cur.emissions;
        const findItem = acc.find((a) => a.year === year);
        if (!findItem) {
          acc.push({
            year,
            emissions,
          });
        }
        console.log(year);
        return acc;
      }, []);
      console.log(arr);

      const labels = arr?.map((a) => `${a.year + 1}년`);
      setTempData({
        labels,
        datasets: [
          {
            label: "온실가스 배출량",
            borderColor: "skyblue",
            fill: false,
            data: arr?.map((a) => a.emissions),
          },
        ],
      });
    };
    fetchEvents();
  }, []);

  return (
    <Section>
      <h2>한국 온실가스 배출량</h2>
      <div className="contents" style={{ width: "700px" }}>
        <div style={{ width: "700px" }}>
          <Line
            style={{
              width: "700px",
              height: "300px",
            }}
            data={tempData}
            options={
              ({
                title: {
                  display: true,
                  text: "한국의 온실가스 배출량",
                  fontSize: 16,
                },
              },
              { legend: { display: true, position: "bottom" } })
            }
            style={{ size: "60px" }}
          />
        </div>
      </div>
    </Section>
  );
};

export default SeaTempApiModalItem;
