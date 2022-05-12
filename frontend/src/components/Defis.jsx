import { useState, useEffect } from "react";

import {
  weeklyQuest,
  dailyQuest,
  randomQuest,
  getRandomResources,
} from "../services/api";

export default function Defis() {
  const [weekly, setWeekly] = useState([]);
  const [dailies, setDailies] = useState([]);
  const [randoms, setRandoms] = useState([]);

  useEffect(() => {
    setWeekly(getRandomResources(weeklyQuest, 1));
    setDailies(getRandomResources(dailyQuest, 3));
    setRandoms(getRandomResources(randomQuest, 5));
  }, []);

  return (
    <>
      <div className="bg-zinc-100 mx-auto w-[90%] pb-8 pt-8 rounded-3xl text-roboto mb-12">
        <h2 className="text-3xl font-[700] text-left ml-8 pb-1">Quête hebdo</h2>
        <p className="text-left ml-8 text-2xl font-[200] mb-4">3 jours restant</p>

        <p className="text-center py-2 text-3xl font-[400] rounded-3xl mx-8 bg-zinc-200 mb-4">Ne pas manger de viande</p>
        <div>
          <div className="absolute mx-8 h-6 w-[60%] rounded-3xl z-20 bg-gradient-to-r from-emerald-400 to-lime-400">

          </div>
          <div className="mx-8 h-6 w-100 top-4 rounded-3xl z-20 bg-zinc-200 text-right pr-2 font-[900]">80%
          </div>
        </div>
      </div>
      <h2 className="text-roboto text-3xl font-[700] text-left ml-8">Quêtes quotidiennes</h2>
      <div className="flex flex-col mx-auto text-left my-8 mx-16 text-roboto w-[90%]">
        <input
          className="transition duration-200 cursor-pointer my-8 text-center"
          type="checkbox"
          value=""
          id={`flex`}
        />
        <input
          className="transition duration-200 cursor-pointer my-8 text-center"
          type="checkbox"
          value=""
          id={`flex`}
        />
        <input
          className="transition duration-200 cursor-pointer my-8 text-center"
          type="checkbox"
          value=""
          id={`flex`}
        />
      </div>
      <h2 className="text-roboto text-3xl font-[700] text-left ml-8">Quêtes aléatoires</h2>
      <div className="flex justify-center m-4 text-left mb-16 ml-16">
        <div>
          {randoms.map((quest) => (
            <div className="form-check">
              <input
                className="form-check-input h-4 w-4 rounded-sm transition duration-200 mt-1 align-top mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id={`flex${quest}`}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor={`flex${quest}`}
              >
                {quest}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
