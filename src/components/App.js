import "../assets/css/App.css";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<ListBooks />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
