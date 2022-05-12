import "../App.css";
import avatar from "../assets/avatar.png";
import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Novembre",
    "Décembre",
  ],
  datasets: [
    {
      label: "economie de Co2 en kilogrammes équivalent carbone keqC",
      data: ["32", "12", "15", "20"],
      backgroundColor: ["yellow"],
    },
  ],
};

  



const dataUser = {
  labels: [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Novembre",
    "Décembre",
  ],
  datasets: [
    {
      label: 'Dataset 1',
      data: ["11", "23", "3", "17"],
      borderColor: 'red',
      
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: ["32", "12", "15", "20"],
      borderColor: 'blue',
     
      yAxisID: 'y1',
    },
    {
      label: 'Dataset 2',
      data: ["32", "12", "15", "20"],
      borderColor: 'blue',
      
      yAxisID: 'y1',
    },
    {
      label: 'Dataset 2',
      data: ["32", "12", "15", "20"],
      borderColor: 'blue',
      
      yAxisID: 'y1',
    },
    
  ]
};

export default function Profils() {
  return (
    <div className="ProfilsPage">
      <div className="bg-zinc-100 mx-auto w-[90%] pb-8 pt-8 rounded-3xl text-roboto mb-12">
        <h1 className="text-3xl text-center font-[700] pb-1 ">Profils page</h1>
        <img className="avatar" src={avatar} alt="avatar" width="120px" />
        <div className="userInfo">
          <br />
          <h2>users</h2>
          <p>Jean-Eude</p>
        </div>
      </div>
      <div className="Quêtes-journalières">
        <h1 className="text-roboto text-3xl font-[700] text-left ml-8">
          Quêtes journalières
        </h1>
        <p> "Ne pas utiliser sa voiture ",</p>
        <p>"Ne pas acheter de produits emballés ",</p>
        <p>"Éviter d’avoir un enfant dans la journée",</p>
      </div>
      <div className="Quêtes-terminés">
        <h1 className="text-roboto text-3xl font-[700] text-left ml-8">
          Quêtes validés de la semaine
        </h1>
        <p className="italic">Ne pas utiliser sa voiture</p>
        <p className="italic">Changer ses ampoules</p>
        <p className="italic">planter un arbre</p>
        <p className="italic">
          Changer sa chaudiere pour une chaudiere hybride
        </p>
      </div>

      <div className="Graph" />
      <h1>Co2 économisé</h1>
      <Bar data={data} />
      <Line data={dataUser} />
    </div>
  );
}
