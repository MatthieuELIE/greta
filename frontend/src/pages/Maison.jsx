import { Link } from "react-router-dom";

export default function Maison() {
  return (
    <>
      <h3 className="text-roboto my-8 text-2xl font-[700] text-left ml-8 pb-1 text-zinc-800">
        Les astuces pour moins polluer :
      </h3>
      <div className="ml-8">
      <img src="./src/assets/maison-eteinte.png" width="300" />
      </div>
      <p className="my-2 text-roboto pl-8">Consommation de CO2 par jour :</p>
      <div className="absolute mx-8 h-6 w-[10%] rounded-3xl z-20 bg-gradient-to-r from-green-300 to-green-500"></div>
      <div className="mx-8 h-6 w-100 top-4 rounded-3xl z-20 bg-zinc-200 text-right pr-4 font-[900] text-zinc-800">
        15 g
      </div>
    </>
  );
}
