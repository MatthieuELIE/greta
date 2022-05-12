import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "@components/Navbar";
<<<<<<< HEAD
import FriendsBoard from "@pages/FriendsBoard";
=======
import React from "react";
>>>>>>> 90e8a21a78dcfb6e6a97f4f54629ae8b461b54e2

import "./App.css";
import "./index.css";

import Profils from "@pages/Profils";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
<<<<<<< HEAD
        <main className="min-h-screen">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/friendsboard" element={<FriendsBoard />} />
=======

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profils />} />
>>>>>>> 90e8a21a78dcfb6e6a97f4f54629ae8b461b54e2
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
