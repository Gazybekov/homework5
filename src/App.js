import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inf from "./components/Inf";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inf />} />
          <Route path="/content" element={<Content />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
