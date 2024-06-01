import Button from "../../components/Button.jsx";
import { useState } from "react";

export default function Absen() {
  const [open, setOpen] = useState(false);

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
