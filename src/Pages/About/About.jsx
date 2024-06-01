import Button from "../../components/Button.jsx";
import { Link } from "react-router-dom";

const mataKuliah = [
  { matkul: "Psikologi Kependidikan ", dosen: "Dr. Ajat Rukajat, M.M.Pd" },
  {
    matkul: "Perencanaan Pendidikan Islam ",
    dosen: "Dr. Hj. Mimin Maryati, M.Pd",
  },
  {
    matkul: "Manajemen Strategik Pendidikan ",
    dosen: "Dr. H. Ilham Fahmi, S.Pd., M.Pd",
  },
  {
    matkul: "Etika Profesi Kependidikan",
    dosen: "Dr. Abu Bakar, M.Pd",
  },
  {
    matkul: "Final Proyek Literasi Digital",
    dosen: "Nanang Burhan, BSc., M.T",
  },
  {
    matkul: "Manajemen Perunahan Pendidikan",
    dosen: "H. Abdul Kosim, Lc., M.M.Pd",
  },
  {
    matkul: "Manajemen SDM",
    dosen: "N. Fathurrohman, S.Ag., M.Pd.I",
  },
  {
    matkul: "Manajemen Kelas ",
    dosen: "Hinggil Permana, S.Pd.I., M.Pd",
  },
  {
    matkul: "Supervisi Pendidikan",
    dosen: "Dr. H. Acep Nurlaeli, M.Ag",
  },
];

export default function About() {
  return (
    <>
      <div className="w-[85%]  bg-[#3C6CA8] mx-auto p-4 rounded-md ">
        {mataKuliah.map((objMatkul) => (
          <div className="collapse collapse-arrow bg-white mb-2  ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-sm">
              <strong> {objMatkul.matkul}</strong>
              <p> {objMatkul.dosen} </p>
            </div>

            <div className="collapse-content">
              {" "}
              <Button className="bg-green-300 text-sm font-normal px-2 py-1 rounded-sm">
                <Link to="/Absen">Lihat</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
