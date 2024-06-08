import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 flex items-center bg-transparent text-white">
        <div className="flex-1 gap-4">
          <figure className="w-24 ">
            <img src="/src/assets/icon.png" alt="Icon" />{" "}
          </figure>
          <a className="text-sm">
            Manajemen Pendidikan Islam, <br /> Universitas Singaperbangsa
            Karawang{" "}
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <Link to="/Home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/Kelas">
                {" "}
                <a>Kelas</a>
              </Link>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <Link to="/About">
                {" "}
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
