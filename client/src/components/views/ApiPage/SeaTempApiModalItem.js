// npm install axios chart.js react-chartjs-2 --save 로 axios와 차트js 모듈2개까지 총 세개 모듈 설치

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const SeaTempApiModalItem = () => {
  const [seaLevelData, setSeaLevelData] = useState({});

  // useEffect를 쓴 이유 : fetch함수를 통해 API를 계속 불러오는 것을 방지하여 속도 향상, useState 값이 변경되면 업데이트 해주기 위해.
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('https://postman-open-technologies.github.io/environment/apis/global-surface-temperatures/');
      console.log(res);
      // makeData(res.data);
    };

  }, []);


  return (
    <section>
      <h2>국내 코로나 현황</h2>
      <div>
        <div>
          {/* <Line data={} options={
            { title: { display: true, text: "월별 격리자 현황", fontSize: 16 } },
            { legend: { display: true, position: "bottom" } }
          } /> */}
        </div>
      </div>
    </section>
  );
};

export default SeaTempApiModalItem;

// return (
//   <div>
//     <Carousel autoplay>
//       {true&&props.image.map((image, index) => (
//         <div key={index}>
//           <img
//             style={{ width: "100%", maxHeight: "150px" }}
//             src={`http://localhost:5000/${image}`}
//             alt="productImage"
//           />
//         </div>
//       ))}
//     </Carousel>
//   </div>
// );
// }