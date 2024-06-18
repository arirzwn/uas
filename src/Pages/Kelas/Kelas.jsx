import Button from "../../components/Button.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SelectedMatkulContext } from "../../components/SelectedDosenContext.js";

const Matkul = [
  {
    matkul: "Psikologi Kependidikan ",
    dosen: "Dr. Ajat Rukajat, M.M.Pd",
    qr: "./src/assets/qr/qr Psikologi Kependidikan.png",
  },
  {
    matkul: "Perencanaan Pendidikan Islam ",
    dosen: "Dr. Hj. Mimin Maryati, M.Pd",
    qr: "./src/assets/qr/qr Perencanaan Pendidikan.png",
  },
  {
    matkul: "Manajemen Strategik Pendidikan ",
    dosen: "Dr. H. Ilham Fahmi, S.Pd., M.Pd",
    qr: "./src/assets/qr/qr Manajemen Strategi.png",
  },
  {
    matkul: "Etika Profesi Kependidikan",
    dosen: "Dr. Abu Bakar, M.Pd",
    qr: "./src/assets/qr/qr Etika Profesi.png",
  },
  {
    matkul: "Final Proyek Literasi Digital",
    dosen: "Nanang Burhan, BSc., M.T",
    qr: "./src/assets/qr/qr Final Proyek.png",
  },
  {
    matkul: "Manajemen Perubahan Pendidikan",
    dosen: "H. Abdul Kosim, Lc., M.M.Pd",
    qr: "./src/assets/qr/qr Manajemen Perubahan Islam.png",
  },
  {
    matkul: "Manajemen SDM",
    dosen: "N. Fathurrohman, S.Ag., M.Pd.I",
    qr: "./src/assets/qr/qr Manaj SDM.png",
  },
  {
    matkul: "Manajemen Kelas ",
    dosen: "Hinggil Permana, S.Pd.I., M.Pd",
    qr: "./src/assets/qr/qr Manaj Kelas.png",
  },
  {
    matkul: "Supervisi Pendidikan",
    dosen: "Dr. H. Acep Nurlaeli, M.Ag",
    qr: "./src/assets/qr/qr Supervisi Pend.png",
  },
];

export default function Kelas() {
  const { setSelectedMatkul } = useContext(SelectedMatkulContext);

  return (
    <>
      <div className=" w-[85%] bg-[#3C6CA8]  mx-auto p-4 rounded-md mt-4">
        {Matkul.map((objMatkul) => (
          <div
            className="collapse collapse-arrow bg-white  mb-2 "
            key={objMatkul.dosen}
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-sm">
              <strong> {objMatkul.matkul}</strong>
              <p> {objMatkul.dosen} </p>
            </div>

            <div className="collapse-content">
              {" "}
              <Button className="bg-green-300 text-sm font-normal px-2 py-1 rounded-sm">
                <Link to="/Absen" onClick={() => setSelectedMatkul(objMatkul)}>
                  Lihat
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
