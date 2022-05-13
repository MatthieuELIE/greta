import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Navbar from "@components/Navbar";
import React from "react";
import Footer from "@components/Footer";
import FriendsBoard from "@pages/FriendsBoard";
import AchievementsPage from "@pages/AchievementsPage";
import Profils from "@pages/Profils";
import Impact from "@pages/Impact";
import Reco from "@pages/Reco";
import Graphic from "@pages/Graphique";
import Arbres from "@pages/Arbres";

import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App with-bg bg-bgwhite">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friendsboard" element={<FriendsBoard />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/profil" element={<Profils />} />
            <Route path="/reco" element={<Reco />} />
            <Route path="/graphic" element={<Graphic />} />
            <Route path="/arbres" element={<Arbres />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
