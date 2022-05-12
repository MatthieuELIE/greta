import React from "react";
import { Link } from "react-router-dom";

export default function AchievementsPage() {
  return (
    <>
      <div className="flex flex-row mb-12 font-[300] text-roboto text-2xl text-zinc-800">
        <Link to="/footprint">
        <div className="pl-4 hover:font-bold">Mon empreinte</div>
        </Link>
        <Link to="/friendsboard">
          <div className="pl-4 hover:font-bold">Mes amis</div>
        </Link>
        <Link to="/achievements">
          <div className="pl-4 hover:font-bold">Mes hauts-faits</div>
        </Link>
      </div>
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
      <div>
          <div class="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
            <svg
              class="w-40 m-auto"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9985 2.84071C31.2849 2.84071 34.539 3.488 37.5752 4.74562C40.6113 6.00324 43.3701 7.84657 45.6938 10.1703C48.0176 12.4941 49.861 15.2529 51.1186 18.289C52.3762 21.3252 53.0235 24.5793 53.0235 27.8657C53.0235 31.152 52.3762 34.4061 51.1186 37.4423C49.861 40.4785 48.0176 43.2372 45.6938 45.561C43.3701 47.8848 40.6113 49.7281 37.5752 50.9857C34.539 52.2433 31.2849 52.8906 27.9985 52.8906C24.7122 52.8906 21.4581 52.2433 18.4219 50.9857C15.3857 49.7281 12.627 47.8848 10.3032 45.561C7.97943 43.2372 6.1361 40.4785 4.87848 37.4423C3.62086 34.4061 2.97357 31.152 2.97357 27.8657C2.97357 24.5793 3.62086 21.3252 4.87848 18.289C6.13611 15.2529 7.97943 12.4941 10.3032 10.1703C12.627 7.84656 15.3857 6.00324 18.4219 4.74562C21.4581 3.488 24.7122 2.84071 27.9985 2.84071L27.9985 2.84071Z"
                stroke="#e4e4f2"
                stroke-width="3"
              />
              <path
                d="M27.301 2.50958C33.0386 2.35225 38.6614 4.13522 43.26 7.57004C47.8585 11.0049 51.1637 15.8907 52.641 21.437C54.1182 26.9834 53.6811 32.8659 51.4002 38.133C49.1194 43.4001 45.1283 47.7437 40.0726 50.4611C35.0169 53.1785 29.1923 54.1108 23.541 53.1071C17.8897 52.1034 12.7423 49.2225 8.93145 44.9305C5.12062 40.6384 2.86926 35.1861 2.54159 29.4558C2.21391 23.7254 3.82909 18.0521 7.12582 13.3536"
                stroke="url(#paint0_linear_622:13696)"
                stroke-width="5"
                stroke-linecap="round"
              />
              <path
                d="M13.3279 30.7467C13.3912 29.48 13.8346 28.5047 14.6579 27.8207C15.4939 27.124 16.5896 26.7757 17.9449 26.7757C18.8696 26.7757 19.6612 26.9404 20.3199 27.2697C20.9786 27.5864 21.4726 28.0234 21.8019 28.5807C22.1439 29.1254 22.3149 29.746 22.3149 30.4427C22.3149 31.2407 22.1059 31.9184 21.6879 32.4757C21.2826 33.0204 20.7949 33.3877 20.2249 33.5777V33.6537C20.9596 33.8817 21.5296 34.287 21.9349 34.8697C22.3529 35.4524 22.5619 36.1997 22.5619 37.1117C22.5619 37.8717 22.3846 38.5494 22.0299 39.1447C21.6879 39.74 21.1749 40.2087 20.4909 40.5507C19.8196 40.88 19.0089 41.0447 18.0589 41.0447C16.6276 41.0447 15.4622 40.6837 14.5629 39.9617C13.6636 39.2397 13.1886 38.1757 13.1379 36.7697H15.7219C15.7472 37.3904 15.9562 37.8907 16.3489 38.2707C16.7542 38.638 17.3052 38.8217 18.0019 38.8217C18.6479 38.8217 19.1419 38.6444 19.4839 38.2897C19.8386 37.9224 20.0159 37.4537 20.0159 36.8837C20.0159 36.1237 19.7752 35.579 19.2939 35.2497C18.8126 34.9204 18.0652 34.7557 17.0519 34.7557H16.5009V32.5707H17.0519C18.8506 32.5707 19.7499 31.969 19.7499 30.7657C19.7499 30.221 19.5852 29.7967 19.2559 29.4927C18.9392 29.1887 18.4769 29.0367 17.8689 29.0367C17.2736 29.0367 16.8112 29.2014 16.4819 29.5307C16.1652 29.8474 15.9816 30.2527 15.9309 30.7467H13.3279ZM25.6499 37.9477C26.8659 36.9344 27.8349 36.092 28.5569 35.4207C29.2789 34.7367 29.8806 34.0274 30.3619 33.2927C30.8433 32.558 31.0839 31.836 31.0839 31.1267C31.0839 30.4807 30.9319 29.974 30.6279 29.6067C30.3239 29.2394 29.8553 29.0557 29.2219 29.0557C28.5886 29.0557 28.1009 29.271 27.7589 29.7017C27.4169 30.1197 27.2396 30.696 27.2269 31.4307H24.6429C24.6936 29.9107 25.1433 28.758 25.9919 27.9727C26.8533 27.1874 27.9426 26.7947 29.2599 26.7947C30.7039 26.7947 31.8123 27.181 32.5849 27.9537C33.3576 28.7137 33.7439 29.7207 33.7439 30.9747C33.7439 31.9627 33.4779 32.9064 32.9459 33.8057C32.4139 34.705 31.8059 35.4904 31.1219 36.1617C30.4379 36.8204 29.5449 37.6184 28.4429 38.5557H34.0479V40.7597H24.6619V38.7837L25.6499 37.9477Z"
                fill="currentColor"
              />
              <path
                d="M36.1948 28.8842C36.1948 29.4438 36.2557 29.8634 36.3775 30.1432C36.4992 30.423 36.6967 30.5628 36.9699 30.5628C37.5097 30.5628 37.7796 30.0033 37.7796 28.8842C37.7796 27.7717 37.5097 27.2155 36.9699 27.2155C36.6967 27.2155 36.4992 27.3537 36.3775 27.6302C36.2557 27.9067 36.1948 28.3247 36.1948 28.8842ZM38.456 28.8842C38.456 29.6347 38.3293 30.2024 38.0758 30.5875C37.8257 30.9693 37.457 31.1602 36.9699 31.1602C36.5091 31.1602 36.1504 30.9644 35.8936 30.5727C35.6402 30.181 35.5135 29.6182 35.5135 28.8842C35.5135 28.1371 35.6352 27.5742 35.8788 27.1957C36.1257 26.8172 36.4894 26.6279 36.9699 26.6279C37.4472 26.6279 37.8142 26.8238 38.0709 27.2155C38.3276 27.6071 38.456 28.1634 38.456 28.8842ZM40.5395 31.7774C40.5395 32.3402 40.6003 32.7615 40.7221 33.0413C40.8439 33.3178 41.043 33.456 41.3195 33.456C41.596 33.456 41.8001 33.3194 41.9317 33.0462C42.0634 32.7697 42.1292 32.3468 42.1292 31.7774C42.1292 31.2145 42.0634 30.7982 41.9317 30.5283C41.8001 30.2551 41.596 30.1185 41.3195 30.1185C41.043 30.1185 40.8439 30.2551 40.7221 30.5283C40.6003 30.7982 40.5395 31.2145 40.5395 31.7774ZM42.8056 31.7774C42.8056 32.5245 42.6789 33.0906 42.4254 33.4757C42.1753 33.8575 41.8067 34.0484 41.3195 34.0484C40.8521 34.0484 40.4917 33.8526 40.2383 33.4609C39.9881 33.0693 39.8631 32.5081 39.8631 31.7774C39.8631 31.0302 39.9849 30.4674 40.2284 30.0889C40.4753 29.7104 40.839 29.5211 41.3195 29.5211C41.7869 29.5211 42.1506 29.7153 42.4106 30.1037C42.6739 30.4888 42.8056 31.0467 42.8056 31.7774ZM41.5318 26.7316L37.5278 33.9497H36.8021L40.8061 26.7316H41.5318Z"
                fill="white"
              />
              <path
                d="M23.5776 18.4198H25.5424V22.8407H23.5776V18.4198ZM30.4545 16.455H32.4193V22.8407H30.4545V16.455ZM27.0161 13.5078H28.9809V22.8407H27.0161V13.5078Z"
                fill="#6A6A9F"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_622:13696"
                  x1="5.54791e-07"
                  y1="42.0001"
                  x2="54.6039"
                  y2="41.9535"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E323FF" />
                  <stop offset="1" stop-color="#7517F8" />
                </linearGradient>
              </defs>
            </svg>
            <div class="mt-6">
              <h5 class="text-xl text-gray-700 text-center">
                Quêtes finis ce mois ci
              </h5>
              <div class="mt-2 flex justify-center gap-4">
                <h3 class="text-3xl font-bold text-gray-700">28</h3>
                <div class="flex items-end gap-1 text-green-500">
                  <svg
                    class="w-3"
                    viewBox="0 0 12 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>+4%</span>
                </div>
              </div>
              <span class="block text-center text-gray-500">
                comparé au mois dernier
              </span>
            </div>
          </div>
        </div>
    </>
  );
}
