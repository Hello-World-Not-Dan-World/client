import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './component/Map.js';
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Hunt from "./pages/HuntingPage/Hunt.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/map" element={<Map/>}/>
        <Route path="/main" element={<MainPage />} />
        <Route path='/hunt' element={<Hunt/>}/>
      </Routes>
    </div>
  );
}

export default App;
