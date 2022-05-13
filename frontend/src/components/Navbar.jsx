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
            <div className="flex flex-row justify-left w-[90%]">
                <Link to="/">
                    <div className="mx-4 py-4 text-zinc-700 hover:cursor-pointer text-2xl text-roboto font-[900] hover:text-emerald-400">
                        <h2>Accueil</h2>
                    </div>
                </Link>
                <div className="py-4 text-zinc-700 text-2xl text-roboto font-[400]">
                    <h2>|</h2>
                </div>
                <Link to="/impact">
                    <div className="mx-3 py-4 text-zinc-700 hover:cursor-pointer text-2xl text-roboto font-[900] hover:text-lime-400">
                    Empreinte
                    </div>
                </Link>
                <div className="py-4 text-zinc-700 text-2xl text-roboto font-[400]">
                    <h2>|</h2>
                </div>
                <Link to="/discount">
                    <div className="mx-3 py-4 text-zinc-700 hover:cursor-pointer text-2xl text-roboto font-[900] hover:text-green-400">
                        Store
                    </div>
                </Link>
            </div>
        </div>
    );

}
