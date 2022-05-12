import "../App.css";
import avatar from "../assets/avatar.png";
import { Bar, Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";


export default function Profils() {
  return (
    <div className="ProfilsPage">
      <div className="flex flex-row mb-12 font-[300] text-roboto text-2xl text-zinc-800">
        <Link to="/footprint">
        <div className="pl-4 hover:font-bold">Mon empreinte</div>
        </Link>
        <Link to="/friendsboard">
          <div className="pl-4 hover:font-bold">Mes amis</div>
        </Link>
        <Link to="/achievements">
          <div className="pl-4 hover:font-bold">Mes hauts-faits</div>
        </Link>
      </div>
      <div className="bg-zinc-100 mx-auto w-[90%] pb-8 pt-8 rounded-3xl text-roboto mb-12">
        <h1 className="text-3xl text-center font-[700] pb-1">
          Thomas Thumberg
        </h1>
        <img className="avatar" src={avatar} alt="avatar" width="120px" />
        <div className="flex flex-col text-center justify-centert">
          <p className="mt-4 font-[700]">28 ans - Bordeaux</p>
          <p className="mt-2 bg-zinc-200 p-2 rounded-3xl w-[90%] mx-auto">
            A économisé{" "}
            <span className="text-xl font-[900] mx-1 text-lime-700">
              58kg de CO2
            </span>{" "}
            depuis le 13/02/2022
          </p>
        </div>
      </div>
      <div className="Quêtes-journalières text-roboto">
        <h1 className="text-roboto text-3xl font-[700] text-left ml-8 pb-4">
          Quêtes quotidiennes validées ✅
        </h1>
        <div className="mb-12 text-xl ml-8">
          <p className="my-6">● Ne pas utiliser sa voiture</p>
          <p className="my-6">● Ne pas acheter de produits emballés</p>
          <p className="my-6">● Éviter d’avoir un enfant dans la journée</p>
        </div>
      </div>
      <div className="Quêtes-terminés text-roboto">
        <h1 className="text-roboto text-3xl font-[700] text-left ml-8 pb-4">
          Quêtes hebdo validées ✅
        </h1>
        <p className="mb-12 text-xl ml-8 my-6">
          ● Changer sa chaudière pour une chaudière hybride
        </p>
      </div>
    </div>
  );
}
