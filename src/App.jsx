import Footer from "./layout/Footer/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Absen from "./Pages/Absen/Absen.jsx";

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
//         <Route path="/about" element={<About />} />
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

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {location.pathname !== "/" && <Navbar />}
        {/*<Navbar />*/}
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Absen" element={<Absen />} />
        </Routes>
        {/*<Footer />*/}
        {location.pathname !== "/" && <Footer />}
      </div>
    </Router>
  );
}
