import React from "react";

export default function Navbar() {
    return (
        <div>
            <div className="text-center py-4">
                <h1 className="text-6xl text-knw text-gradient drop-shadow-sm">
                    Greenta
                </h1>
                <div className="pt-2 flex flex-row justify-center">
                    <div className="w-12 bg-blue-500 h-1 mr-12"></div>
                    <div className="w-12 bg-red-500 h-1"></div>
                </div>
            </div>
            <div className="flex flex-row justify-around">
                <div className="rounded-l-3xl w-[50%] ml-2 py-4 bg-emerald-400 text-center hover:bg-emerald-500 hover:cursor-pointer text-2xl text-white text-mada font-bold">
                    <h2 className="drop-shadow">Accueil</h2>
                </div>
                <div className="rounded-r-3xl w-[50%] mr-2 py-4 bg-lime-400 text-center hover:bg-lime-500 hover:cursor-pointer text-2xl text-white text-mada font-bold">
                    <h2 className="drop-shadow">Ma progression</h2>
                </div>
            </div>
        </div>
    );
}
