// npm install axios chart.js react-chartjs-2 --save 로 axios와 차트js 모듈2개까지 총 세개 모듈 설치

import React, { useState, useEffect } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import axios from "axios";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  background-color: white;
  margin-left: 100px;
`;

const SeaTempApiModalItem = () => {
  const [gasData, setGaspData] = useState({});
  const [emissionData, setEmissionpData] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(
        "https://postman-open-technologies.github.io/environment/apis/green-house-gases/emissions-per-country"
      );
      makeData(res.data);
    };
    const makeData = (items) => {
      const arr = items.reduce((acc, cur) => {
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const code = cur.code;
        const emissions = cur.emissions;
        const findItem = acc.find((a) => a.code === code);
        if (!findItem) {
          acc.push({
            year,
            emissions,
            code,
          });
        }
        console.log(code, '나라');
        console.log(emissions[2015], '배출량');
        return acc;
      }, []);


      // const country = arr.map((a) => `${a.code} 이라는 나라는`);
      // const country = arr.code{KOR}
      // const country = arr.find((a) => `${a.code}`);  => AFG 하나만 나오긴 함

      const emitquantity = arr.find((a) => a.code);
      console.log({ emitquantity });

      setGaspData({
        emitquantity,
        datasets: [
          {
            label: "온실가스 배출량 변화",
            borderColor: "skyblue",
            fill: false,
            data: emitquantity.emissions
          },
        ],
      });
    };
    fetchEvents();
  }, []);

  return (
    <Section>
      <h2>온실가스 배출량 변화</h2>
      <div className="contents" style={{ width: "700px" }}>
        <div style={{ width: "700px" }}>
          <Line
            style={{
              width: "700px",
              height: "300px",
            }}
            data={gasData}
            // data={emitquantity}
            options={
              ({
                title: {
                  display: true,
                  text: "온실가스 배출량 변화",
                  fontSize: 16,
                },
              },
                { legend: { display: true, position: "bottom" } })
            }
          />
        </div>
      </div>
    </Section>
  );
};

export default SeaTempApiModalItem;
