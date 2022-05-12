import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Navbar from "@components/Navbar";
import React from "react";
import Footer from "@components/Footer";
import FriendsBoard from "@pages/FriendsBoard";
import AchievementsPage from "@pages/AchievementsPage";
import FootPrint from "@pages/FootPrint";

import "./App.css";
import "./index.css";

import Profils from "@pages/Profils";

function App() {
  return (
    <div className="App with-bg bg-bgwhite">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friendsboard" element={<FriendsBoard />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/footprint" element={<FootPrint />} />
            <Route path="/profil" element={<Profils />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
