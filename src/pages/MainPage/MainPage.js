import React from "react";
import "./MainPage.css";
import { FiBell, FiAlignJustify } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MainPage() {
  useEffect(() => {
    const postData = {
      id: "user",
    };
    // console.log(JSON.stringify(postData));
    fetch("http://43.201.66.4:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setValue(data.user);
      })
      .catch((err) => {
        console.error(
          "There was a problem with the fetch post operation: ",
          err
        );
      });
  }, []);

  const navigate = useNavigate();

  const [value, setValue] = useState(2000); // 초기값은 0으로 설정
  const maxValue = 5000; // 최대 값
  const percentage = (value / maxValue) * 100; // 현재 값에 따른 퍼센티지 계산

  const [buttonText, setButtonText] = useState("user"); // 버튼 텍스트 상태 관리
  const [buttonColor, setButtonColor] = useState("primary"); // 버튼 배경 색깔 상태 관리
  const [imgPath, setImg] = useState("/img/TRASHHUNTER.jpeg"); // 버튼 배경 색깔 상태 관리

  const handleClick = () => {
    // 버튼 클릭 이벤트 처리
    if (buttonText === "user") {
      setButtonText("hunter"); // 텍스트 변경
      setButtonColor("danger"); // 배경 색 변경
      setImg("/img/newHunter.jpeg");
    } else {
      setButtonText("user"); // 텍스트 변경
      setButtonColor("primary"); // 배경 색 변경
      setImg("/img/TRASHHUNTER.jpeg");
    }
  };

  return (
    <div className="container">
      <div className="top">
        <div className="left">Trash Hunter</div>
        <div className="right">
          <FiBell className="bell" />
          <FiAlignJustify className="menu" />
        </div>
      </div>
      <div className="button">
        <button type="button" className={`${buttonColor}`} onClick={handleClick}>
        {buttonText}
        </button>
      </div>
      <div style={{ height: "20px" }}></div>
      <div className="myPage">
        <div className="d-flex justify-content-between align-items-center p-5">
          <p>
            김채은 님이 <br /> 지구를 아껴준 시간
          </p>
          <img src="/img/profile.png" alt="프로필 이미지" className="profile" />
        </div>
        <div className="d-flex justify-content-between ">
          <div
            style={{
              width: "60%",
              backgroundColor: "#ccc",
              height: "20px",
              borderRadius: "10px",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                width: `${percentage}%`,
                backgroundColor: "green",
                height: "100%",
                borderRadius: "10px",
              }}
            ></div>
          </div>
          <div
            style={{
              marginRight: "50px",
              fontSize: "25px",
            }}
          >
            {value}
          </div>
        </div>
      </div>
      <div style={{ height: "20px" }}></div>
      <div
        className="map"
        style={{ position: "relative" }}
        onClick={() => navigate("/map")}
      >
        <img src={`${imgPath}`} alt="map" className="mapImg"/>
      </div>
      {/* <div className="banner d-flex justify-content-between p-3">
        <p>
          매해 전 세계에서 3억 4000만 톤의 플라스틱 제품이 생산된다. 이는
          뉴욕시의 고층 건물 전체를 채우고도 남는 양이다.{" "}
        </p>
        <img src="/img/wallE.png" alt="wallE" className="wallE" />
      </div> */}
    </div>
  );
}
