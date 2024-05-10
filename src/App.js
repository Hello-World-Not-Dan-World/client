<<<<<<< HEAD
import "./App.css";
import Main from "./pages/Main";
import React, { useState } from "react";
import Test from "./pages/Test";
import { Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div>
      <Test />
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
