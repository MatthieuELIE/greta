import React from "react";
import { Link } from "react-router-dom";

export default function AchievementsPage() {
  return (
    <>
      <div className="flex flex-col mb-12 font-[300] text-roboto text-xl text-zinc-800 text-center  ">
        <Link to="/friendsboard">
          <div className="pl-4 hover:scale-105">Mes amis</div>
        </Link>
        <Link to="/achievements">
          <div className="pl-4 font-bold">Mes hauts-faits</div>
        </Link>
        <Link to="/arbres">
          <div className="pl-4 hover:scale-105">Adopte un arbre</div>
        </Link>
      </div>
      <div className="my-8">
        <div className="flex flex-col items-center">
          <div className="px-10 mx-auto container align-middle">
            <div className="grid grid-cols-1 gap-2 w-[95%] mx-auto">
              <div className="shadow rounded-lg py-3 px-5 bg-white">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h6 className="text-2xl">
                      Quêtes <br></br>terminées :
                    </h6>
                    <h4 className="text-black text-4xl font-bold text-left">
                      133
                    </h4>
                  </div>
                  <div>
                    <i className="fa-solid fa-crown text-4xl text-gradient"></i>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-lg py-3 px-5 bg-white">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h6 className="text-2xl">Km parcourus :</h6>
                    <h4 className="text-black text-4xl font-bold text-left">
                      341
                    </h4>
                  </div>
                  <div>
                    <i className="fa-solid fa-bicycle text-4xl text-gradient"></i>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-lg py-3 px-5 bg-white">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h6 className="text-2xl">Déchets recyclés :</h6>
                    <h4 className="text-black text-4xl font-bold text-left">
                      41
                    </h4>
                  </div>
                  <div>
                    <i className="fa-solid fa-recycle text-4xl text-gradient"></i>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-lg py-3 px-5 bg-white">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h6 className="text-2xl">Arbres plantés :</h6>
                    <h4 className="text-black text-4xl font-bold text-left">
                      3
                    </h4>
                  </div>
                  <div>
                    <i className="fa-solid fa-tree text-4xl text-gradient"></i>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-lg py-3 px-5 bg-white">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h6 className="text-2xl">Nombre d'ampoules changées :</h6>
                    <h4 className="text-black text-4xl font-bold text-left">
                      9
                    </h4>
                  </div>
                  <div>
                    <i className="fa-solid fa-lightbulb text-4xl text-gradient"></i>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-lg py-3 px-5 bg-white">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h6 className="text-2xl">Journées sans cafés :</h6>
                    <h4 className="text-black text-4xl font-bold text-left">
                      12
                    </h4>
                  </div>
                  <div>
                    <i className="fa-solid fa-mug-hot text-4xl text-gradient"></i>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-lg py-3 px-5 bg-white">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h6 className="text-2xl">A investi dans un compost :</h6>
                    <h4 className="text-black text-2xl font-bold text-left">
                      Accompli le 13/05/22
                    </h4>
                  </div>
                  <div>
                    <i className="fa-solid fa-box text-4xl text-gradient"></i>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-lg py-3 px-5 bg-white">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h6 className="text-2xl">Un jour sans enfant :</h6>
                    <h4 className="text-black text-2xl font-bold text-left">
                      Accompli le 28/04/22
                    </h4>
                  </div>
                  <div>
                    <i className="fa-solid fa-baby text-4xl text-gradient"></i>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-lg py-3 px-5 bg-white">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h6 className="text-2xl">Une semaine sans viande :</h6>
                    <h4 className="text-black text-2xl font-bold text-left">
                      Accompli le 12/04/22
                    </h4>
                  </div>
                  <div>
                    <i className="fa-solid fa-drumstick-bite text-4xl text-gradient"></i>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-lg py-3 px-5 bg-white">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h6 className="text-2xl">Une semaine sans voiture :</h6>
                    <h4 className="text-black text-2xl font-bold text-left">
                      Accompli le 03/03/22
                    </h4>
                  </div>
                  <div>
                    <i className="fa-solid fa-car text-4xl text-gradient"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
