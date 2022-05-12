import { useState, useEffect } from "react";
import "../App.css"

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
  const [questChecked, setQuestChecked] = useState(false);
  const [randoms, setRandoms] = useState([]);
  const [randomsChecked, setRandomsChecked] = useState(false);

  useEffect(() => {
    setWeekly(getRandomResources(weeklyQuest, 1));
    setDailies(dailyQuest);
    setRandoms(getRandomResources(randomQuest, 1));
  }, []);

  const handleDailiesDone = () => {
      if (!questChecked === true) {
          setCount((count) => count + 10);
        }
        if (!questChecked === false) {
            setCount((count) => count - 10);
        }
    };
    
    const handleRandomsDone = () => {
      if (!randomsChecked === true) {
        setCount((count) => count + 5);
      }
      if (!randomsChecked === false) {
        setCount((count) => count - 5);
      }
    };

  return (
    <>
    <h1 className="text-3xl my-4">{count} kg/CO2 économisés</h1>
      <div className="bg-zinc-100 mx-auto w-[90%] pb-8 pt-8 rounded-3xl text-roboto mb-12">
        <h2 className="text-3xl font-[700] text-left ml-8 pb-1">Quête de la semaine 🌿</h2>
        <div className="flex flex-row mb-4 mt-1">
          <p className="text-left ml-8 text-2xl font-[200]">3 jours restant</p>
          <p className="ml-4 text-sm text-center p-2 font-[700] rounded-3xl bg-lime-400">45 kg/CO2</p>
        </div>
        <p className="text-center py-2 text-3xl font-[400] rounded-3xl mx-8 bg-zinc-200 mb-4">Ne pas manger de viande</p>
        <div>
          <div className="absolute mx-8 h-6 w-[60%] rounded-3xl z-20 bg-gradient-to-r from-emerald-400 to-lime-400">

          </div>
          <div className="mx-8 h-6 w-100 top-4 rounded-3xl z-20 bg-zinc-200 text-right pr-2 font-[900]">80%
          </div>
        </div>
      </div>
      <h2 className="text-roboto text-3xl font-[700] text-left ml-8">Quêtes du jour</h2>
      <div className="mt-8 text-left mx-12 text-xl font-[300]">
        {dailies.map((quest) => (
          <div key={dailies.id} className="form-check mb-8">
            <input
              className="absolute h-6 w-6 my-10 rounded-sm transition duration-200 mt-1 align-top mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id={`flex${quest}`}
              onClick={(quest) => setQuestChecked(!questChecked)}
              onChange={handleDailiesDone}
            />
            <label
              className="form-check-label pl-8 inline-block text-gray-800"
              htmlFor={quest}
            >
              {quest}
            </label>
          </div>
        ))}
      </div>
      <div className="bg-zinc-100 mx-auto w-[90%] pb-8 pt-8 rounded-3xl text-roboto mb-12 mt-12">
        <h2 className="text-roboto text-3xl font-[700] text-center">Une quête de plus ? 🪴</h2>
        <div className="mt-8 text-left mx-8 text-xl font-[300]">
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
