import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";

export default function Arbres() {
  return (
    <div>
      <div className="flex flex-col mb-12 font-[300] text-roboto text-xl text-zinc-800 text-center  ">
        <Link to="/friendsboard">
          <div className="pl-4 hover:scale-105">Mes amis</div>
        </Link>
        <Link to="/achievements">
          <div className="pl-4 hover:scale-105">Mes hauts-faits</div>
        </Link>
        <Link to="/arbres">
          <div className="pl-4 font-bold">Adopte un arbre</div>
        </Link>
      </div>
      <div className="mt-4 bg-zinc-100 mx-auto w-[90%] pb-8 pt-8 rounded-3xl text-roboto mb-12">
        <h1 className="text-xl text-knw text-left ml-8 text-gradient drop-shadow-sm mb-4">
          {" "}
          Parce que la forêt est la meilleure solution pour le climat et la
          biodiversité
        </h1>
        <h2 className="text-lxl text-center font-[700] pb-1 text-zinc-800 mb-4">
          Greenta s'engage avec<br></br>🌱 Reforest'Action 🌱
        </h2>
        <h1 className="text-lxl font-[400] text-left ml-8 pb-1 text-zinc-800">
          Pour chaque 1000 kg de CO2 economisés, Greenta s'engage à planter un
          arbre 🌳
        </h1>
      </div>
      <div>
        <img
          className="w-[95%] mx-auto"
          src="./src/assets/foret.png"
          width="auto"
        />
        <div className="flex flex-col text-center my-12 w-[90%] mx-auto">
          <div className="text-2xl font-[700] pb-8 text-zinc-800">
            <span className="mr-2 text-knw font-bold text-gradient">
              18 865
            </span>
            arbres déjà plantés
          </div>
          <div className="text-xl pb-4 text-zinc-800">
            <span className="mr-2 font-bold">56 293</span> abris pour animaux
            créés
          </div>
          <div className="text-xl pb-4 text-zinc-800">
            <span className="mr-2 font-bold">72 149</span> mois d'oxygène
            générés
          </div>
          <div className="text-xl pb-4 text-zinc-800">
            <span className="mr-2 font-bold">18 865</span> heures de travail
            realisées
          </div>
        </div>
        <div className="mt-4 bg-zinc-100 mx-auto w-[90%] pb-8 pt-4 rounded-3xl text-roboto mb-12 mt-8">
          <img className="avatar" src={avatar} alt="avatar" width="120px" />

          <h3 className="text-2xl font-[700] text-center pb-1 text-zinc-800 mb-8 mt-4">
            Votre contribution{" "}
          </h3>
          <h4 className="text-xl text-center pb-2 text-zinc-800">
            🌳 2 arbres planté :{" "}
            <span className="font-[700]">félicitation !</span>
          </h4>
          <h4 className="text-xl text-center pb-2 text-zinc-800">
            ☁️ 13,5 tonnes de co2 stockés
          </h4>
          <h4 className="text-xl text-center pb-2 text-zinc-800">
            🐦 1 abris pour animaux créés
          </h4>
          <h4 className="text-xl text-center pb-2 text-zinc-800">
            💚 1 semaine d'oxygène généré
          </h4>
          <h4 className="text-xl text-center pb-2 text-zinc-800">
            👏 2 heures de travail crées
          </h4>
        </div>
      </div>
    </div>
  );
}
