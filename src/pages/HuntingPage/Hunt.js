import "./Hunt.css";
import video from "../../assert/cleaning2.gif";
import { useNavigate } from "react-router-dom";

export default function Hunt(){
    let navigate = useNavigate();
    return (
        <div className = "main">
            <div className = "phone">
                <h1>민수민 님이 사냥 중입니다!</h1>
                <img className = "cleaning" src={video}/>
                <button className="complete" onClick={()=>{navigate('/main')}}>사냥 완료!</button>      
            </div> 
        </div>
    )
}