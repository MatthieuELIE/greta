import Home from "@pages/Home";
import Navbar from "@components/Navbar";

import "./App.css";
import "./index.css";

import Profils from "@pages/Profils";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="min-h-screen">
        <Home />
      </main>
    </div>
  );
}

export default App;
