import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container as MapDiv } from 'react-naver-maps';
import {
    NaverMap,
    Marker,
  } from 'react-naver-maps';
import ReactModal from "react-modal";
import Modal from 'react-modal';
import wanted from '../assert/wanted.jpeg';
import trash from '../assert/trash.jpeg';


export default function Map(){
    const mapRef = useRef(null);
    const navermaps = window.naver.maps;
    const lat = 37.24304373703529; // 위도 숫자로 넣어주기
    const lng = 127.08093313199434; // 경도 숫자로 넣어주기
    const [markers, setMarker] = useState([{lat, lng}, { lat: 37.4859, lng: 126.997865 },{lat : 37.24, lng: 127.08}]);
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState([{title: "현상금",area: "자대앞 흡연장"}])
    const {naver} = window;
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
          width: "360px",
          height: "460px",
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
        let location = new naver.maps.LatLng(lat, lng );
        var map = new naver.maps.Map('map',{center : location, zoom : 17});
        var mapOptions = {
            zoom: 17,
            center: new naver.maps.LatLng(lat, lng)
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
        style={{
    width: '430px',
    height: '100vh',
    margin: 'auto'
  }}>
        <NaverMap
        id="react-naver-maps-introduction"
        style={{ width: '430px', height: '90vh', borderTop: 'transparent' }}
        defaultCenter={{ lat: lat, lng: lng }}
        defaultZoom={14}
        >
        <Marker
        position={new navermaps.LatLng(lat,lng)}
        />
            {markers.map((input,id) => (
                <Marker
                key={id}
                position={new navermaps.LatLng(input)}
                title={input.station}
                onClick={()=>{setModal(true)}}
                />
            ))}
            </NaverMap>
        </MapDiv>
        <Modal 
        isOpen = {modal} 
        onRequestClose={() => setModal(false)}
        style={customModalStyles}
        >
            <img src={trash} style={{width:"300px", height:"200px", position:"absolute", padding:"180px 0 0 40px"}}/>
            <img src={wanted} style={{width: "360px"}}/>
            
        </Modal>
        </div>   
    )
}