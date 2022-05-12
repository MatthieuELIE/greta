import "../App.css";
import avatar from '../assets/avatar.jpg'; 
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';


const data= {
    labels: ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Novembre","Décembre"],
    datasets : [
        {
            label:"economie de Co2 en kilogrammes équivalent carbone keqC",
            data:["32","12","15","20"],
            backgroundColor:["green"]
        },
    ],
}



export default function Profils() {
  return (
    <div className="ProfilsPage">
      <div className="min-h-screen bg-white-600">
        <h1>Profils page</h1>
        <img className="avatar" src={avatar} alt="avatar" width='120px'/>
        <div className="userInfo">
          <br />
          <h2>users</h2>
          <p>Jean-Eude</p>
              
        </div>
        <div className="Graph" />
        <h1>Co2 économisé</h1>
        <Bar data={data} />
      </div>
    </div>
  );
}
