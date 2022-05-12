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
      <h2 className="text-2xl">Défi de la semaine</h2>
      <div className="flex justify-center m-4">
        <div>
          {weekly.map((quest) => (
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
      <h2 className="text-2xl">Défis du jour</h2>
      <div className="flex justify-center m-4">
        <div>
          {dailies.map((quest) => (
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
      <h2 className="text-2xl">Défis aléatoires</h2>
      <div className="flex justify-center m-4">
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
