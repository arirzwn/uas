import Button from "../../components/Button.jsx";
import { useContext } from "react";
import { SelectedMatkulContext } from "../../components/SelectedDosenContext.js";

export default function Absen() {
  const { selectedMatkul } = useContext(SelectedMatkulContext);

  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          {selectedMatkul && (
            <div className={selectedMatkul.dosen}>
              <h1 className="text-5xl font-bold"> {selectedMatkul.matkul} </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>

              <button
                className="btn bg-pink-300 border-none"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Absen
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold">Scan QR Code</h3>
                  <figure className="w-1/2 mx-auto ">
                    <img src={selectedMatkul.qr} alt={selectedMatkul.matkul} />
                  </figure>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Tutup</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
