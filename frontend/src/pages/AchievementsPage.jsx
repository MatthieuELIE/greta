import React from "react";

export default function AchievementsPage() {
  return (
    <div className="my-8">
      <div className="flex flex-col items-center">
        <h1 className="my-8 text-center font-bold text-4xl">
          Mes Hauts-Faits :
        </h1>
        <div className="px-10 mx-auto container align-middle">
          <div className="grid grid-cols-1 gap-2 w-2/3 mx-auto">
            <div className="shadow rounded-lg py-3 px-5 bg-white">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h6 className="text-2xl">Quêtes terminées :</h6>
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
                  <h6 className="text-2xl">Nombre de déchets recyclés :</h6>
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
                  <h4 className="text-black text-4xl font-bold text-left">3</h4>
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
                  <h4 className="text-black text-4xl font-bold text-left">9</h4>
                </div>
                <div>
                  <i className="fa-solid fa-lightbulb text-4xl text-gradient"></i>
                </div>
              </div>
            </div>
            <div className="shadow rounded-lg py-3 px-5 bg-white">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h6 className="text-2xl">Journée sans cafés :</h6>
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
                  <h6 className="text-2xl">A investit dans un composte :</h6>
                  <h4 className="text-black text-2xl font-bold text-left">
                    Accomplit le 13/05/22
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
                    Accomplit le 28/04/22
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
                    Accomplit le 12/04/22
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
                    Accomplit le 03/03/22
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
  );
}
