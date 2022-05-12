import { Link } from "react-router-dom";

export default function Reco() {
  return (
    <>
      <h3 className="text-roboto my-8 text-2xl font-[700] text-left ml-8 pb-1 text-zinc-800">
        Ce modèle pourrait vous plaire :
      </h3>
      <p className="text-roboto text-xl text-center my-2">
        SMART FORTWO CABRIO EQ{" "}
      </p>
      <img src="./src/assets/smart.png" width="500" />
      <p className="my-2 text-roboto pl-8">Consommation de CO2 :</p>
      <div className="absolute mx-8 h-6 w-[4%] rounded-3xl z-20 bg-gradient-to-r from-green-300 to-green-500"></div>
      <div className="mx-8 h-6 w-100 top-4 rounded-3xl z-20 bg-zinc-200 text-right pr-2 font-[900] text-zinc-800">
        0 g/km
      </div>
      <div className="text-center p-4 text-xl">
        <a
          href="https://www.autoavantages.fr/modele.php?marque=SMART&gamme=FORTWO%20CABRIO%20EQ&mod=220635|FR|0"
          target="_blank"
        >
          <div className="text-center py-8 text-lg">
            <button className="rounded-3xl text-roboto mb-4 text-white font-[700] border-2 border-zinc-100 hover:border-white hover:shadow-inner py-1 px-4 bg-gradient-to-r from-emerald-400 to-lime-400">
              Acheter
            </button>
          </div>
        </a>
      </div>
    </>
  );
}
