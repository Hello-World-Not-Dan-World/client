import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './component/Map.js';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" component={<div></div>} />
        <Route path="/map" component={<Map/>}/>
      </Routes>
      <Map/>
    </div>
  );
}

export default App;
