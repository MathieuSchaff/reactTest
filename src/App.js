import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/contact" exact="true" element={<Contact />} />
        <Route element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
