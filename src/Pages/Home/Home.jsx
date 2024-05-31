import Button from "../../components/Button.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center mx-20 mt-10">
        <div className="flex-1 drop-shadow-2xl">
          <h1 className="text-4xl font-bold text-white drop-shadow-2xl">
            ABSENSI <br /> MAHASISWA MPI UNSIKA
          </h1>
          <h6 className="text-[#F5EA28] font-semibold drop-shadow-2xl ">
            Universitas Singaperbangsa Karawang, Fakultas Agama Islam, <br />{" "}
            Prodi Manajemen Pendidikan Islam.{" "}
          </h6>
          <div className="mt-48  flex  gap-5">
            <Button className="bg-white text-[#3C6CA8] w-28 h-10 ">
              Previous
            </Button>{" "}
            <Link to="/About">
              {" "}
              <Button className="border-[#3C6CA8] border-2 w-28 h-10 ">
                Next
              </Button>
            </Link>
          </div>
        </div>{" "}
        <div className="flex-1">
          <h1 className="  text-[#1B548D] ">
            Absensi Kehadiran Setiap Mata Kuliah Mahasiswa Manajemen Pendidikan
            Islam, Fakultas Agama Islam, Universitas Singaperbangsa Karawang.
          </h1>
        </div>
      </div>
    </>
  );
}
