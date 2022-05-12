import Home from "@pages/Home";
import Navbar from "@components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import "./index.css";

import Profils from "@pages/Profils";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <main className="min-h-screen bg-zinc-600"> */}
          {/* <Home /> */}
          <Routes>
            <Route path="/Profils" element={<Profils />} />
          </Routes>
        {/* </main> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
