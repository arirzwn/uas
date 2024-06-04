import Button from "../../components/Button.jsx";
import { useState } from "react";

const Matkul = [
  {
    matkul: "Psikologi Kependidikan ",
    dosen: "Dr. Ajat Rukajat, M.M.Pd",
    qr: "./src/assets/qr/Psikologi Kep.jpeg",
  },
  {
    matkul: "Perencanaan Pendidikan Islam ",
    dosen: "Dr. Hj. Mimin Maryati, M.Pd",
    // qr:"./src/assets/qr/"
  },
  {
    matkul: "Manajemen Strategik Pendidikan ",
    dosen: "Dr. H. Ilham Fahmi, S.Pd., M.Pd",
    qr: "./src/assets/qr/Manajemen Strategik Pendidikan.jpeg",
  },
  {
    matkul: "Etika Profesi Kependidikan",
    dosen: "Dr. Abu Bakar, M.Pd",
    qr: "./src/assets/qr/Etika Profesi Kependidikan.jpeg",
  },
  {
    matkul: "Final Proyek Literasi Digital",
    dosen: "Nanang Burhan, BSc., M.T",
    qr: "./src/assets/qr/Final Proyek Literasi Digital.jpeg",
  },
  {
    matkul: "Manajemen Perubahan Pendidikan",
    dosen: "H. Abdul Kosim, Lc., M.M.Pd",
    qr: "./src/assets/qr/Manajemen Perubahan Pend.jpeg",
  },
  {
    matkul: "Manajemen SDM",
    dosen: "N. Fathurrohman, S.Ag., M.Pd.I",
    qr: "./src/assets/qr/Manajemen SDM.jpeg",
  },
  {
    matkul: "Manajemen Kelas ",
    dosen: "Hinggil Permana, S.Pd.I., M.Pd",
    qr: "./src/assets/qr/Manajemen Kelas .jpeg",
  },
  {
    matkul: "Supervisi Pendidikan",
    dosen: "Dr. H. Acep Nurlaeli, M.Ag",
    qr: "./src/assets/qr/Supervisi Pendidikan.jpeg",
  },
];

export default function Absen() {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">Psikologi Kependidikan</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <button
              className="btn bg-pink-300 border-none"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Absen
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold">Scan QR Code</h3>
                <figure className="w-1/2 mx-auto ">
                  <img src="/src/assets/qrcode.png" alt="QR CODE" />
                </figure>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Tutup</button>
                  </form>
                </div>
              </div>
            </dialog>

            {/*<Button className="bg-pink-300 text-sm font-normal px-4 py-2 rounded-sm">*/}
            {/*  {" "}*/}
            {/*  Absen{" "}*/}
            {/*</Button>*/}
          </div>
        </div>
      </div>
    </>
  );
}
