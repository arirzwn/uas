import Footer from "./layout/Footer/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {location.pathname !== "/" && <Navbar />}
        {/*<Navbar />*/}
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
        {/*<Footer />*/}
        {location.pathname !== "/" && <Footer />}
      </div>
    </Router>
  );
}

export default App;
