import { Link } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";

export default function Impact() {

  const [counter, setCounter] = useState(56);
  const [counterGmail, setCounterGmail] = useState(23)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterGmail((counterGmail) => counterGmail + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>

      <h2 className="text-roboto text-3xl my-4 font-[700] text-left ml-8 pb-1 text-zinc-800">
        Mon compte Gmail
      </h2>
      <div>
        <p className="text-roboto text-xl text-center my-2">
          Gmail de Thomas Thumberg
        </p>
        <div className="flex flex-col">
          <div className="absolute right-56 py-0.5 px-1 bg-red-400 rounded-3xl z-50 font-[700]">{counterGmail}</div>
          <img className="mx-auto mb-12 mt-4" src="./src/assets/gmail.png" width="100" />
        </div>
        <p className="text-roboto my-2 pl-8">CO2 consommé depuis ce matin :</p>
        <div className="absolute mx-8 h-6 w-[20%] rounded-3xl z-10 bg-gradient-to-r from-red-300 to-red-600"></div>
        <div className="text-roboto mx-8 h-6 w-100 top-4 rounded-3xl z-50 bg-zinc-200 text-right pr-4 font-[900] text-zinc-800">
          {counter} g
        </div>
        <p className="text-center my-8 text-roboto text-xl font-[900]">Pense à archiver tes mails !</p>
        <h2 className="text-roboto text-3xl my-4 font-[700] text-left ml-8 pb-1 text-zinc-800 mt-16">
          Ma voiture
        </h2>
        <div>
          <p className="text-roboto text-xl text-center my-2">
            NISSAN NAVARA II 2.3 DCI
          </p>
          <img src="./src/assets/nissan.png" width="500" />
          <p className="text-roboto my-2 pl-8">Consommation de CO2 par km :</p>
          <div className="absolute mx-8 h-6 w-[48%] rounded-3xl z-10 bg-gradient-to-r from-red-300 to-red-500"></div>
          <div className="text-roboto mx-8 h-6 w-100 top-4 rounded-3xl z-50 bg-zinc-200 text-right pr-4 font-[900] text-zinc-800">
            183 g
          </div>
          <Link to="/reco">
            <div className="text-center py-8 text-lg">
              <button className="rounded-3xl text-roboto mb-4 text-white font-[700] border-2 border-zinc-100 hover:border-white hover:shadow-inner py-1 px-4 bg-gradient-to-r from-emerald-400 to-lime-400">
                Changer de voiture
              </button>
            </div>
          </Link>
        </div>
        <h2 className="text-roboto text-3xl my-4 font-[700] text-left ml-8 pb-1 text-zinc-800">
          Ma maison
        </h2>
        <div>
          <div className="border border-black border-4 rounded-xl">
            <img src="./src/assets/maison.png" width="500" />
          </div>
          <p className="text-roboto my-2 pl-8">Consommation de CO2 par jour :</p>
          <div className="absolute mx-8 h-6 w-[52%] rounded-3xl z-10 bg-gradient-to-r from-red-400 to-red-600"></div>
          <div className="text-roboto mx-8 h-6 w-100 top-4 rounded-3xl z-50 bg-zinc-200 text-right pr-4 font-[900] text-zinc-800">
            369 g
          </div>
          <Link to="/maison">
            <div className="text-center py-8 text-lg">
              <button className="rounded-3xl text-roboto mb-4 text-white font-[700] border-2 border-zinc-100 hover:border-white hover:shadow-inner py-1 px-4 bg-gradient-to-r from-emerald-400 to-lime-400">
                Astuces pour économiser
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
