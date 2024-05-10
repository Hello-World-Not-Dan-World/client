import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header.js";
import { useNavigate } from "react-router-dom";
import { Container as MapDiv } from "react-naver-maps";
import { NaverMap, Marker } from "react-naver-maps";
import ReactModal from "react-modal";
import Modal from "react-modal";
import wanted from "../assert/wanted.jpeg";
import trash from "../assert/trash.jpeg";

export default function Map() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 서버에 요청을 보내는 비동기 함수를 호출합니다.
        const response = await fetch("http://43.201.66.4:3000/api/wanted");
        // 응답 데이터를 가져오고 처리합니다.
        const data = await response.json();
        const tempList = [];
        data["mission"].map((item) => {
          const elem = { lat: item.location[0], lng: item.location[1] };
          tempList.push(elem);
        });

        const copy = [...tempList];
        setMarker(tempList);
        console.log(markers);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    // 초기 로딩 시 fetchData 함수를 실행합니다.
    fetchData();

    // 2초마다 fetchData 함수를 실행하기 위해 setInterval 함수를 사용합니다.
    const intervalId = setInterval(fetchData, 2000);

    // 컴포넌트가 언마운트되거나 업데이트되기 전에 interval을 클리어합니다.
    return () => clearInterval(intervalId);
  }, []);
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const navermaps = window.naver.maps;
  const lat = 37.24304373703529; // 위도 숫자로 넣어주기
  const lng = 127.08093313199434; // 경도 숫자로 넣어주기
  const [markers, setMarker] = useState([
    { lat, lng },
    { lat: 37.4859, lng: 126.997865 },
    { lat: 37.24, lng: 127.08 },
  ]);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState([
    { title: "현상금", area: "자대앞 흡연장" },
  ]);
  const { naver } = window;
  const customModalStyles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      padding: "0px",
      width: "365px",
      height: "470px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  };

  useEffect(() => {
    if (mapRef.current && naver) {
      let location = new naver.maps.LatLng(lat, lng);
      var map = new naver.maps.Map("map", { center: location, zoom: 17 });
      var mapOptions = {
        zoom: 17,
        center: new naver.maps.LatLng(lat, lng),
      };

      var marker = new naver.maps.Marker({
        position: location,
        map: map,
      });
    }
  }, []);

  return (
    <div>
      <MapDiv
        className="container"
        style={{
          width: "430px",
          height: "100vh",
          margin: "auto",
        }}
      >
        <NaverMap
          id="react-naver-maps-introduction"
          style={{ width: "430px", height: "90vh", borderTop: "transparent" }}
          defaultCenter={{ lat: lat, lng: lng }}
          defaultZoom={14}
        >
          <Marker position={new navermaps.LatLng(lat, lng)} />
          {markers.map((input, id) => (
            <Marker
              key={id}
              position={new navermaps.LatLng(input)}
              title={input.station}
              onClick={() => {
                setModal(true);
              }}
            />
          ))}
        </NaverMap>
      </MapDiv>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={customModalStyles}
      >
        <img
          src={trash}
          style={{
            borderRadius: "10px 10px 10px 10px",
            width: "250px",
            height: "130px",
            position: "absolute",
            margin: "170px 0 0 55px",
          }}
        />
        <div
          style={{
            position: "absolute",
            margin: "313px 0 0 100px",
            fontWeight: "bolder",
            fontSize: "30px",
          }}
        >
          3000 point
        </div>
        <img src={wanted} style={{ width: "360px" }} />
        <button
          onClick={() => {
            navigate("/hunt");
          }}
          onMouseOver={(e) => {
            e.target.style.boxShadow =
              "0 0 10px 0 rgb(212,175,143) inset, 0 0 10px 4px rgb(212,175,143)";
            console.log("hi");
          }}
          onMouseOut={(e) => {
            e.target.style.boxShadow =
              "0 0 40px 40px rgb(212,175,143) inset, 0 0 0 0 rgb(212,175,143)";
          }}
          style={{
            color: "#fff",
            fontSize: "15px",
            fontWeight: "bolder",
            backgroundColor: "transparent",
            borderColor: "rgb(212,175,143)",
            transition: "all 150ms ease-in-out",
            boxShadow:
              "0 0 40px 40px rgb(212,175,143) inset, 0 0 0 0 rgb(212,175,143)",
            margin: "0 0 0 80px",
            width: "200px",
            height: "40px",
            borderRadius: "10px",
          }}
        >
          사냥하기
        </button>
      </Modal>
    </div>
  );
}
