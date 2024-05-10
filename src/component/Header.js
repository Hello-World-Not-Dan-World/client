import "../index.css";
import { useNavigate } from "react-router-dom";

export default function Header(){
    let navigate = useNavigate();
    return (
        <section id="header">
            <div class="wrapper">     
                <button class="title" onClick={()=>{
                    navigate('/main');
                }}><i class="fas fa-kiss-wink-heart"></i> home</button>
            </div>
        </section>
    )
}