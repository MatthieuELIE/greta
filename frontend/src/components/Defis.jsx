import { useState, useEffect } from "react";

import {
  weeklyQuest,
  dailyQuest,
  randomQuest,
  getRandomResources,
} from "../services/api";

export default function Defis() {
  const [count, setCount] = useState(0);
  const [weekly, setWeekly] = useState([]);
  const [weeklyChecked, setWeeklyChecked] = useState(false);
  const [dailies, setDailies] = useState([]);
  const [dailiesChecked, setDailiesChecked] = useState(false);
  const [randoms, setRandoms] = useState([]);
  const [randomsChecked, setRandomsChecked] = useState(false);

  useEffect(() => {
    setWeekly(getRandomResources(weeklyQuest, 1));
    setDailies(getRandomResources(dailyQuest, 3));
    setRandoms(getRandomResources(randomQuest, 5));
  }, []);

  const handleDoneQuest = () => {
    if (!weeklyChecked === true) {
      setCount((count) => count + 70);
    }
    if (!weeklyChecked === false) {
      setCount((count) => count - 70);
    }
  };

  const handleDoneDailies = () => {
    if (!dailiesChecked === true) {
      setCount((count) => count + 10);
    }
    if (!dailiesChecked === false) {
      setCount((count) => count - 10);
    }
  };

  const handleDoneRandoms = () => {
    if (!randomsChecked === true) {
      setCount((count) => count + 5);
    }
    if (!randomsChecked === false) {
      setCount((count) => count - 5);
    }
  };

  return (
    <>
      <h1 className="text-3xl my-8">
        <div>{count} g de CO2 économisés</div>
      </h1>
      <h2 className="text-2xl">Défi de la semaine</h2>
      <div className="flex justify-center m-4">
        <div>
          {weekly.map((quest) => (
            <div key={weekly.id} className="form-check">
              <input
                className="form-check-input h-4 w-4 rounded-sm transition duration-200 mt-1 align-top mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id={`flex${quest}`}
                onClick={() => setWeeklyChecked(!weeklyChecked)}
                onChange={handleDoneQuest}
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
            <div key={dailies.id} className="form-check">
              <input
                className="form-check-input h-4 w-4 rounded-sm transition duration-200 mt-1 align-top mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id={`flex${quest}`}
                onClick={() => setDailiesChecked(!dailiesChecked)}
                onChange={handleDoneDailies}
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
            <div key={randoms.id} className="form-check">
              <input
                className="form-check-input h-4 w-4 rounded-sm transition duration-200 mt-1 align-top mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id={`flex${quest}`}
                onClick={() => setRandomsChecked(!randomsChecked)}
                onChange={handleDoneRandoms}
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
