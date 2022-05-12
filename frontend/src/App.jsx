import Home from "@pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import Profils from "@pages/Profils";

function App() {
  return (
    <div className="App">
      <Home />

      <BrowserRouter>
        <Routes>
          <Route path="/Profils" element={<Profils />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
