import Button from "../../components/Button.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const userDb = [
    {
      username: "admin",
      password: "12345",
      isLogin: false,
    },
    {
      username: "mahasiswa1",
      password: "mahasiswa1",
      isLogin: false,
    },
  ];
  localStorage.setItem("userdata", JSON.stringify(userDb));
  const getUserData = JSON.parse(localStorage.getItem("userdata") || '""');

  console.log(`Apakah ngabs ini sudah login? ${getUserData.isLogin}`);

  function handleLogin(e) {
    e.preventDefault();
    const user = userDb.find(
      (user) => user.username === username && user.password === password,
    );
    if (user) {
      alert("success");
      // kita update data dari user nya, jadi isLogin nya true
      const updatedUserData = userDb.map((userItem) =>
        userItem.username === user.username
          ? { ...userItem, isLogin: true }
          : userItem,
      );
      // simpan data baru ini ke localstorage
      localStorage.setItem("userdata", JSON.stringify(updatedUserData));
      navigate("/Home");
    } else {
      alert("Kata sandi salah!");
    }
  }
  useEffect(() => {
    console.log("re render ok");
  }, [location.pathname]);

  return (
    <>
      <div className="flex justify-center  min-h-screen items-center container ">
        <form onSubmit={handleLogin}>
          <div className="bg-white p-4  flex flex-col gap-4 items-center rounded-md  max-[400px]:mx-20">
            <figure className="w-20">
              <img src="/src/assets/icon.png" alt="Logo" />
            </figure>

            <h1 className="text-center text-sm text-slate-400">
              Masukan email dan password
            </h1>

            <div className="label flex flex-col items-start gap-2">
              <span className="label-text">Email</span>
              <label className=" input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>

            <div className="label flex flex-col items-start gap-2">
              <span className="label-text">Password</span>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukan password"
                />
              </label>
            </div>
            <Button className="bg-pink-200 px-10 py-1 text-sm rounded-sm font-normal">
              Login
            </Button>
          </div>
        </form>
      </div>
      )
    </>
  );
}
