import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Link to="/profil">
        <div className="absolute top-4 right-8 hover:scale-105 duration-200">
          <button id="login" type="button">
            <img
              src="./src/assets/avatar.png"
              width="60"
              className="ml-2 rounded-full inline"
            />
          </button>
        </div>
      </Link>
    </>
  );
}
