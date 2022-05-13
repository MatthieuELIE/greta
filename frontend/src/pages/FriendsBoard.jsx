import React from "react";
import FriendCard from "@components/FriendCard";
import { Link } from "react-router-dom";

export default function FriendBoard() {
  const users = [
    {
      id: 1,
      name: "Badri Kaz",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Sunglasses&hatColor=White&facialHairType=BeardMajestic&facialHairColor=BlondeGolden&clotheType=ShirtScoopNeck&clotheColor=Pink&eyeType=Close&eyebrowType=UnibrowNatural&mouthType=Serious&skinColor=Brown",
      quetes: 25,
      co2: 237,
    },
    {
      id: 2,
      name: "Hugh Danilo",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&accessoriesType=Blank&hairColor=Red&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=ShirtCrewNeck&clotheColor=Pink&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&mouthType=Serious&skinColor=Light",
      quetes: 12,
      co2: 123,
    },
    {
      id: 3,
      name: "Jay Venera",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&hatColor=Heather&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Selena&eyeType=Squint&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=DarkBrown",
      quetes: 2,
      co2: 4,
    },
  ];

  console.log(users);
  return (
    <div>

      <div className="flex flex-col mb-12 font-[300] text-roboto text-xl text-zinc-800 text-center  ">
        <Link to="/friendsboard">
          <div className="pl-4 font-bold">Mes amis</div>
        </Link>
        <Link to="/achievements">
          <div className="pl-4 hover:scale-105">Mes hauts-faits</div>
        </Link>
        <Link to="/arbres">
          <div className="pl-4 hover:scale-105">Adopte un arbre</div>
        </Link>
        <Link to="/arbres">
          <div className="pl-4 hover:font-bold">Adopte un arbre</div>
        </Link>
      </div>
      <Link to="/graphique">
        <div className="my-10 p-8 h-25 w-[90%] mx-auto cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl flex">
          <div className="-mb-20 -translate-y-1/2 transform">
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Close&eyebrowType=Default&mouthType=Serious&skinColor=Pale"
              className="mr-8 h-40"
            />
          </div>
          <div className="text-center">
            <h3 className="mb-2 text-2xl font-bold">Milorad Yura</h3>
            <ul className="flex flex-row justify-center text-lg">
              <li className="flex flex-col">
                <span className="font-bold">Quêtes</span>15
              </li>
              <li className="mx-6 flex flex-col">
                <span className="font-bold">Co2</span>97
              </li>
            </ul>
          </div>
        </div>
      </Link>
      <div className="flex flex-col w-screen items-center justify-center">
        {users.map((user) => (
          <FriendCard
            key={user.id}
            name={user.name}
            image={user.image}
            quetes={user.quetes}
            co2={user.co2}
          />
        ))}
      </div>
    </div>
  );
}
