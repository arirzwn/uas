import Footer from "./layout/Footer/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Kelas from "./Pages/Kelas/Kelas.jsx";
import Login from "./Pages/Login/Login.jsx";
import Absen from "./Pages/Absen/Absen.jsx";
import About from "./Pages/About/About.jsx";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { SelectedMatkulContext } from "./components/SelectedDosenContext.js";
import { useState } from "react";

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
    <div className="flex flex-col h-screen overflow-y-auto ">
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
