import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Router, Routes, useLocation } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// function AppWithNavbar() {
//   const location = useLocation();
//
//   useEffect(() => {
//     console.log("ReRender");
//     // ini jadi dependensinya, ketika route nya berubah, dari login ke home, nanti bakal di re-rener compo nya
//   }, [location.pathname]);
//
//   return (
//     <div>
//       {location.pathname !== "/" && <Navbar />}
//       <Routes>
//         <Route index element={<Login />} />
//         <Route path="/home" element={<App />} />
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
