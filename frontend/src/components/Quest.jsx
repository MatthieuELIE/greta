import { useState, useEffect } from "react";

import {
  weeklyQuest,
  dailyQuest,
  randomQuest,
  getRandomResources,
} from "../services/api";

export default function Counter() {
  const [weekly, setWeekly] = useState([]);
  const [dailies, setDailies] = useState([]);
  const [randoms, setRandoms] = useState([]);

  useEffect(() => {
    setWeekly(getRandomResources(weeklyQuest, 1));
    setDailies(getRandomResources(dailyQuest, 3));
    setRandoms(getRandomResources(randomQuest, 5));
  }, []);

  return (
    <div>
      <div>
        <h1> Quête Hebdomadaire :</h1>
        <p>WEEKLY</p>
        {weekly.map((quest) => (
          <p>{quest}</p>
        ))}

        <p>DAILY</p>
        {dailies.map((quest) => (
          <p>{quest}</p>
        ))}
        <p>RANDOM</p>
        {randoms.map((quest) => (
          <p>{quest}</p>
        ))}
      </div>
    </div>
  );
}
