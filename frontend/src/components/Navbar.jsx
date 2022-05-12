import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="text-center py-4">
        <h1 className="text-6xl text-knw text-gradient drop-shadow-sm">
          Greta
        </h1>
      </div>
      <div className="flex flex-row justify-around">
        <div className="rounded-t-3xl w-[48%] py-4 bg-[#34d399] text-center text-2xl text-white text-mada font-bold">
          <h2 className="drop-shadow">Accueil</h2>
        </div>
        <div className="rounded-t-3xl w-[48%] py-4 bg-[#a3e635] text-center text-2xl text-white text-mada font-bold">
          <h2 className="drop-shadow">Ma progression</h2>
        </div>
      </div>
    </div>
  );
}
