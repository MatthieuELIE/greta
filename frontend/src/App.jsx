import Home from "@pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "@components/Navbar";
<<<<<<< HEAD
import { Route, Routes, BrowserRouter } from "react-router-dom";
=======
import React from "react";
>>>>>>> 433bd89d0ab644cb1e4b21d48a1e44aa923649c4

import "./App.css";
import "./index.css";

import Profils from "@pages/Profils";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
<<<<<<< HEAD
        {/* <main className="min-h-screen bg-zinc-600"> */}
          {/* <Home /> */}
          <Routes>
            <Route path="/Profils" element={<Profils />} />
          </Routes>
        {/* </main> */}
=======
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profils />} />
          </Routes>
        </main>
>>>>>>> 433bd89d0ab644cb1e4b21d48a1e44aa923649c4
      </BrowserRouter>
    </div>
  );
}

export default App;
