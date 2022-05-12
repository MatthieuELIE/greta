import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Navbar from "@components/Navbar";
import FriendsBoard from "@pages/FriendsBoard";

import "./App.css";
import "./index.css";

import Profils from "@pages/Profils";
import Impact from "@pages/impact";

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
            <Route path="/profil" element={<Profils />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
