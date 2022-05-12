import React from "react";
import FriendCard from "@components/FriendCard";
import { Link } from "react-router-dom";

export default function FriendBoard() {
 
 
  const users = [
    {
      id: 0,
      name: "Milorad Yura",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=Blue01&eyeType=Close&eyebrowType=Default&mouthType=Serious&skinColor=Pale",
      quetes: 15,
      co2: 97, 
      
    }
    ,
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
      <h1 className="my-8 text-left ml-12 text-zinc-800 text-4xl text-roboto font-[400]">
        Mes amis
      </h1>
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
