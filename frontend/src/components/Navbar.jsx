import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Navbar() {
    return (
        <div>
            <div className="ml-4 text-left py-4">
                <h1 className="text-6xl text-knw text-gradient drop-shadow-sm">
                    Greenta
                </h1>
                <Login />
            </div>
            <div className="flex flex-row justify-left">
                <Link to="/">
                    <div className="mx-4 py-4 text-zinc-700 hover:cursor-pointer text-4xl text-roboto font-[900] hover:text-emerald-400">
                        <h2>Accueil</h2>
                    </div>
                </Link>
                <div className="mx-2 py-4 text-zinc-700 text-4xl text-roboto font-[400]">
                    <h2>|</h2>
                </div>
                <Link to="/profil">
                    <div className="mx-4 py-4 text-zinc-700 hover:cursor-pointer text-4xl text-roboto font-[900] hover:text-lime-400">
                        <h2>Ma progression</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
}
