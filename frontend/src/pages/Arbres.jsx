import avatar from "../assets/avatar.png";

export default function Arbres() {
  return (
    <div>
      <div className="mt-4 bg-zinc-100 mx-auto w-[90%] pb-8 pt-8 rounded-3xl text-roboto mb-12">
        <h1 className="text-xl text-knw  text-left ml-8 text-gradient drop-shadow-sm ">
          {" "}
          Parce que la forêt est la meilleure solution pour le climat et la
          biodiversité
        </h1>
        <h2 className="text-lxl font-[700] text-left ml-8 pb-1 text-zinc-800">
          Greenta s'engage avec Reforest'Action🌱
        </h2>
        <h1 className="text-lxl font-[700] text-left ml-8 pb-1 text-zinc-800">
          Pour chaque 1000 kilo de Co2 economisé Greenta s'engage à planter un
          arbre 🌳
        </h1>
      </div>
      <div>
      
        <img src="./src/assets/foret.png" 
        width="auto"/>
        <div className="mt-4 bg-zinc-100 mx-auto w-[90%] pb-8 pt-8 rounded-3xl text-roboto mb-12">
 <img className="avatar" src={avatar} alt="avatar" width="120px" />

        <h3 className="text-2xl font-[700] text-left pb-1 text-zinc-800">Votre contribution </h3>
       <h4 className="text-lxl  text-left ml-8 pb-1 text-zinc-800">🌳 2 arbres planté : félicitation !</h4>
       <h4 className="text-lxl text-left ml-8 pb-1 text-zinc-800">☁️ 13,5 tonnes de co2 stockés</h4>
       <h4 className="text-lxl text-left ml-8 pb-1 text-zinc-800">🐦 1 abris pour animaux créés</h4>
       <h4 className="text-lxl text-left ml-8 pb-1 text-zinc-800">💚1 semaine d'oxygène généré</h4>
       <h4 className="text-lxl text-left ml-8 pb-1 text-zinc-800">👏2 heures de travail crées</h4>

        </div>
      </div>
    </div>
  );
}
