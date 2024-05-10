import React from "react";
import "./MainPage.css";
// import { FiBell, FiAlignJustify } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

export default function mainPage() {
  return (
    <div className="container">
      <div className="top">
        <div className="right">
          {/* <FiBell className="bell" />
          <FiAlignJustify className="menu" /> */}
        </div>
      </div>
      <div className="myPage">
        <div className="d-flex justify-content-between align-items-center p-5">
          <p>
            김채은 님이 <br /> 지구를 아껴준 시간
          </p>
          {/* <img src="/img/profile.png" alt="프로필 이미지" className="profile" /> */}
        </div>
      </div>
      <div className="map" style={{ position: "relative" }}>
        <img src="/img/map.jpeg" alt="map" className="mapImg" />
        <p className="mapText">
          쓰레기 확인하고 <br /> 지구를 구하러 가기
        </p>
      </div>
      <div className="banner d-flex justify-content-between p-3">
        <p>
          매해 전 세계에서 3억 4000만 톤의 플라스틱 제품이 생산된다. 이는
          뉴욕시의 고층 건물 전체를 채우고도 남는 양이다.{" "}
        </p>
        <img src="/img/wallE.png" alt="wallE" className="wallE" />
      </div>
    </div>
  );
}
