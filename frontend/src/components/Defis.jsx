import { useState, useEffect } from "react";
import "../App.css";

import {
  weeklyQuest,
  dailyQuest,
  randomQuest,
  getRandomResources,
} from "../services/api";

export default function Defis() {
  const [count, setCount] = useState(36);
  const [weekly, setWeekly] = useState([]);
  const [dailies, setDailies] = useState([]);
  const [quest1Checked, setQuest1Checked] = useState(false);
  const [quest2Checked, setQuest2Checked] = useState(false);
  const [quest3Checked, setQuest3Checked] = useState(false);
  const [randoms, setRandoms] = useState([]);
  const [randomsChecked, setRandomsChecked] = useState(false);

  useEffect(() => {
    setWeekly(getRandomResources(weeklyQuest, 1));
    setDailies(dailyQuest);
    setRandoms(getRandomResources(randomQuest, 1));
  }, []);

  const handleDaily1Done = () => {
    if (!quest1Checked === true) {
      setCount((count) => count + 2);
    }
    if (!quest1Checked === false) {
      setCount((count) => count - 2);
    }
  };

  const handleDaily2Done = () => {
    if (!quest2Checked === true) {
      setCount((count) => count + 0.5);
    }
    if (!quest2Checked === false) {
      setCount((count) => count - 0.5);
    }
  };

  const handleDaily3Done = () => {
    if (!quest3Checked === true) {
      setCount((count) => count + 35000);
    }
    if (!quest3Checked === false) {
      setCount((count) => count - 35000);
    }
  };

  const handleRandomsDone = () => {
    if (!randomsChecked === true) {
      setCount((count) => count + 1);
    }
    if (!randomsChecked === false) {
      setCount((count) => count - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <h1 className="rounded-3xl text-zinc-800 text-roboto text-center p-2 my-8 text-3xl z-50 drop-shadow-md">
        CO2 économisé : <br></br>
        <span className="font-[900] text-4xl text-emerald-400">{count}</span> kg
      </h1>
      <div className="mt-4 bg-zinc-100 mx-auto w-[90%] pb-8 pt-8 rounded-3xl text-roboto mb-12">
        <h2 className="text-3xl font-[700] text-left ml-8 pb-1 text-zinc-800">
          Quête de la semaine 🌿
        </h2>
        <div className="flex flex-row mb-4 mt-1">
          <p className="text-left ml-8 text-2xl font-[200] text-zinc-800">
            3 jours restant
          </p>
          <p className="ml-4 text-sm text-center text-white p-2 font-[700] rounded-3xl bg-lime-400">
            45 kg/CO2
          </p>
        </div>
        <p className="text-center py-2 text-xl font-[400] rounded-3xl mx-8 bg-zinc-200 mb-4 text-zinc-800">
          Ne pas manger de viande
        </p>
        <div>
          <div className="absolute mx-8 h-6 w-[60%] rounded-3xl z-20 bg-gradient-to-r from-emerald-400 to-lime-400"></div>
          <div className="mx-8 h-6 w-100 top-4 rounded-3xl z-20 bg-zinc-200 text-right pr-2 font-[900] text-zinc-800">
            80%
          </div>
        </div>
      </div>
      <h2 className="text-roboto text-3xl font-[700] text-left ml-14 text-zinc-800">
        Quêtes du jour
      </h2>
      <div className="mt-8 text-left mx-12 text-xl font-[300]">
        <div className="form-check mb-12">
          <input
            className="absolute h-6 w-6 my-10 rounded-sm transition duration-200 mt-1 align-top mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="quest"
            onClick={() => setQuest1Checked(!quest1Checked)}
            onChange={handleDaily1Done}
          />
          <label
            className="form-check-label pl-8 inline-block text-gray-800"
            htmlFor="quest"
          >
            Ne pas utiliser sa voiture (2kg/CO2)
          </label>
        </div>

        <div className="form-check mb-12">
          <input
            className="absolute h-6 w-6 my-10 rounded-sm transition duration-200 mt-1 align-top mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="quest"
            onClick={() => setQuest2Checked(!quest2Checked)}
            onChange={handleDaily2Done}
          />
          <label
            className="form-check-label pl-8 inline-block text-gray-800"
            htmlFor="quest"
          >
            Ne pas acheter de produits emballés (0.5kg/CO2)
          </label>
        </div>

        <div className="form-check mb-12">
          <input
            className="absolute h-6 w-6 my-10 rounded-sm transition duration-200 mt-1 align-top mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="quest"
            onClick={() => setQuest3Checked(!quest3Checked)}
            onChange={handleDaily3Done}
          />
          <label
            className="form-check-label pl-8 inline-block text-gray-800"
            htmlFor="quest"
          >
            Éviter d’avoir un enfant dans la journée (35.000kg/CO2)
          </label>
        </div>
      </div>

      <div className="bg-zinc-100 mx-auto w-[90%] pb-8 pt-4 rounded-3xl text-roboto mb-12 mt-12">
        <div className="text-left ml-4">
          <button
            id="reset"
            type="button"
            onClick={handleSubmit}
            className="rounded-3xl text-roboto mb-4 text-white font-[700] border-2 border-zinc-100 hover:border-white hover:shadow-inner py-1 px-4 bg-gradient-to-r from-emerald-400 to-lime-400"
          >
            actualiser
          </button>
        </div>
        <h2 className="text-roboto text-3xl font-[700] text-left ml-8 text-zinc-800">
          Une quête de plus ? 🪴
        </h2>
        <div className="mt-4 text-left mx-8 text-xl font-[300]">
          <div>
            {randoms.map((quest) => (
              <div key={randoms.id} className="flex flex-row">
                <input
                  className="absolute h-6 w-6 my-10 rounded-sm transition duration-200 mt-1 align-top mr-2 cursor-pointer"
                  type="checkbox"
                  value="quest"
                  id={`flex${quest}`}
                  onClick={() => setRandomsChecked(!randomsChecked)}
                  onChange={handleRandomsDone}
                />
                <label
                  className="form-check-label pl-8 inline-block text-zinc-800"
                  htmlFor={`flex${quest}`}
                >
                  {quest}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
