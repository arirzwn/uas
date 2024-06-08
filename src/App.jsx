import Footer from "./layout/Footer/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Kelas from "./Pages/Kelas/Kelas.jsx";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Absen from "./Pages/Absen/Absen.jsx";
import { SelectedMatkulContext } from "./components/SelectedDosenContext.js";
import { useState } from "react";
import About from "./Pages/About/About.jsx";

// const Matkul = [
//   {
//     matkul: "Psikologi Kependidikan ",
//     dosen: "Dr. Ajat Rukajat, M.M.Pd",
//     qr: "./src/assets/qr/Psikologi Kep.jpeg",
//   },
//   {
//     matkul: "Perencanaan Pendidikan Islam ",
//     dosen: "Dr. Hj. Mimin Maryati, M.Pd",
//     // qr:"./src/assets/qr/"
//   },
//   {
//     matkul: "Manajemen Strategik Pendidikan ",
//     dosen: "Dr. H. Ilham Fahmi, S.Pd., M.Pd",
//     qr: "./src/assets/qr/Manajemen Strategik Pendidikan.jpeg",
//   },
//   {
//     matkul: "Etika Profesi Kependidikan",
//     dosen: "Dr. Abu Bakar, M.Pd",
//     qr: "./src/assets/qr/Etika Profesi Kependidikan.jpeg",
//   },
//   {
//     matkul: "Final Proyek Literasi Digital",
//     dosen: "Nanang Burhan, BSc., M.T",
//     qr: "./src/assets/qr/Final Proyek Literasi Digital.jpeg",
//   },
//   {
//     matkul: "Manajemen Perubahan Pendidikan",
//     dosen: "H. Abdul Kosim, Lc., M.M.Pd",
//     qr: "./src/assets/qr/Manajemen Perubahan Pend.jpeg",
//   },
//   {
//     matkul: "Manajemen SDM",
//     dosen: "N. Fathurrohman, S.Ag., M.Pd.I",
//     qr: "./src/assets/qr/Manajemen SDM.jpeg",
//   },
//   {
//     matkul: "Manajemen Kelas ",
//     dosen: "Hinggil Permana, S.Pd.I., M.Pd",
//     qr: "./src/assets/qr/Manajemen Kelas .jpeg",
//   },
//   {
//     matkul: "Supervisi Pendidikan",
//     dosen: "Dr. H. Acep Nurlaeli, M.Ag",
//     qr: "./src/assets/qr/Supervisi Pendidikan.jpeg",
//   },
// ];

// Code 1 dulu

// function AppWithNavbar() {
//   const location = useLocation();
//
//   useEffect(() => {
//     console.log("ReRender");
//   }, [location.pathname]);
//
//   return (
//     <div>
//       {location.pathname !== "/" && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<Kelas />} />
//         <Route path="/absen" element={<Absen />} />
//       </Routes>
//     </div>
//   );
// }
//
// function Root() {
//   return (
//     <Router>
//       <AppWithNavbar />
//     </Router>
//   );
// }
//
// ReactDOM.createRoot(document.getElementById("root")).render(<Root />);

// Code 2 bisa digunakan
// export default function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {location.pathname !== "/" && <Navbar />}
//         {/*<Navbar />*/}
//         <Routes>
//           <Route index element={<Login />} />
//           <Route path="/Home" element={<Home />} />
//           <Route path="/Kelas" element={<Kelas />} />
//           <Route path="/Absen" element={<Absen />} />
//         </Routes>
//         {/*<Footer />*/}
//         {location.pathname !== "/" && <Footer />}
//       </div>
//     </Router>
//   );
// }

//experiment
export default function App() {
  const [selectedMatkul, setSelectedMatkul] = useState();

  return (
    <Router>
      <SelectedMatkulContext.Provider
        value={{ selectedMatkul, setSelectedMatkul }}
      >
        <AppContent />
      </SelectedMatkulContext.Provider>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen overflow-y-auto">
      {location.pathname !== "/" && location.pathname !== "/Login" && (
        <Navbar />
      )}
      <Routes>
        <Route index element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Kelas" element={<Kelas />} />
        <Route path="/Absen" element={<Absen />} />
        <Route path="/About" element={<About />} />
      </Routes>
      {location.pathname !== "/" && location.pathname !== "/Login" && (
        <Footer />
      )}
    </div>
  );
}
