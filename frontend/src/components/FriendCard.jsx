import React from "react";

export default function FriendCard({ name, image, quetes, co2 }) {
  return (
    <div>
      <div className="my-10 p-8 h-25 w-100 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl flex">
        <div className="-mb-20 -translate-y-1/2 transform">
          <img src={image} alt={name} title={name} className="mr-8 h-40" />
        </div>
        <div className="text-center">
          <h3 className="mb-2 text-2xl font-bold">{name}</h3>
          <ul className="flex flex-row justify-center text-lg">
            <li className="flex flex-col">
              <span className="font-bold">Quêtes finies</span> {quetes}
            </li>
            <li className="mx-6 flex flex-col">
              <span className="font-bold">Co2</span> {co2}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
