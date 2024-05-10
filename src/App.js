import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
