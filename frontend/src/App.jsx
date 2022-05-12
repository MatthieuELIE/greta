import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Navbar from "@components/Navbar";
import FriendsBoard from "@pages/FriendsBoard";

import "./App.css";
import "./index.css";

import Profils from "@pages/Profils";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/friendsboard" element={<FriendsBoard />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
