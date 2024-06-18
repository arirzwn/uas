import { FaInstagram } from "react-icons/fa";

const team = [
  {
    nama: "Anita Zahra",
    sosmed: "https://www.instagram.com/zraanita/",
    img: "/assets/team/ANITA.jpeg",
  },
  {
    nama: "Aulia Helen Safitri Nasution",
    sosmed: "https://www.instagram.com/helensftrii/",
    img: "/assets/team/AULIA.jpeg",
  },
  {
    nama: "Syifa'ul Hidayah",
    sosmed: "https://www.instagram.com/syifahdyh/",
    img: "/assets/team/SYIFA.jpeg",
  },
  {
    nama: "Yuni Luthfiah",
    sosmed: "https://www.instagram.com/yuniluthfi04/",
    img: "/assets/team/YUNI.png",
  },
  {
    nama: "Zalfa Syahirah",
    sosmed: "https://www.instagram.com/zalfasyhrh_/",
    img: "/assets/team/ZALFA.jpeg",
  },
];

export default function About() {
  return (
    <>
      <div className="w-[70%]  bg-white h-screen mx-auto mt-10 rounded-md">
        <h1 className="text-2xl text-center my-10">Our Awesome Team</h1>
        <div className=" flex gap-4 justify-center  rounded-md">
          {team.map((objTeam) => (
            <div
              className="w-40 h-60 bg-pink-200 flex flex-col items-center text-center my-auto p-4 rounded-md"
              key={objTeam.nama}
            >
              <figure className="w-20 h-20 mb-4">
                <img
                  src={objTeam.img}
                  alt={objTeam.nama}
                  className="rounded-full object-cover w-full h-full"
                />
              </figure>
              <div className="flex flex-col items-center flex-grow">
                <h1 className="text-md mb-2 font-normal">{objTeam.nama}</h1>
                <a
                  href={objTeam.sosmed}
                  className="mt-auto bg-white p-2 rounded-full hover:bg-pink-200 hover:border-2 hover:border-red-400 "
                  target="_blank"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
