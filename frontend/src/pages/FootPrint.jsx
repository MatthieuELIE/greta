import { Link } from "react-router-dom";

export default function FootPrint() {
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
    </>
  );
}
