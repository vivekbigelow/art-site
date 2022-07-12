import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pieces from "./components/Pieces";
import Details from "./components/Details";

import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    // console.log('effect')
    axios.get("http://localhost:3001/api/pieces").then((response) => {
      // console.log("promise fulfilled");
      setPieces(response.data);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="pieces" element={<Pieces data={pieces} />} />
            <Route path="pieces/:pieceId" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
