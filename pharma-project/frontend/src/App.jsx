// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";

// // Auth Pages
// import DoctorLogin from "./pages/Doctor/DoctorLogin";
// import PharmacistLogin from "./pages/Pharmacist/PharmacistLogin";
// import DoctorSignup from "./pages/Doctor/DoctorSignup";
// import PharmacistSignup from "./pages/Pharmacist/PharmacistSignup";
// import DoctorForgotPassword from "./pages/Doctor/DoctorForgotPassword";
// import PharmacistForgotPassword from "./pages/Pharmacist/PharmacistForgotPassword";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<Home />} />

//         {/* Doctor Auth */}
//         <Route path="/doctor-login" element={<DoctorLogin />} />
//         <Route path="/doctor-signup" element={<DoctorSignup />} />
//         <Route path="/doctor-forgot-password" element={<DoctorForgotPassword />} />

//         {/* Pharmacist Auth */}
//         <Route path="/pharmacist-login" element={<PharmacistLogin />} />
//         <Route path="/pharmacist-signup" element={<PharmacistSignup />} />
//         <Route path="/pharmacist-forgot-password" element={<PharmacistForgotPassword />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import FeaturesPage from "./pages/FeaturesPage";

// Auth Pages
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import DoctorForgotPassword from "./pages/Doctor/DoctorForgotPassword";
import PharmacistForgotPassword from "./pages/Pharmacist/PharmacistForgotPassword";

function Layout({ children }) {
  const location = useLocation();

  // Hide Navbar/Footer ONLY on Forgot Password pages
  const hideOnForgot = [
    "/doctor-forgot-password",
    "/pharmacist-forgot-password"
  ];

  const hideLayout = hideOnForgot.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* About */}
        <Route path="/about" element={<AboutPage />} />
     
       {/*  feature    */}
         <Route path="/features" element={<FeaturesPage />} />

          {/* Auth */}
           <Route path="/signup" element={<Signup />} />
           <Route path="/login" element={<Login/>} />
          <Route path="/doctor-forgot-password" element={<DoctorForgotPassword />} />

          {/* Pharmacist Auth */}
          <Route path="/pharmacist-forgot-password" element={<PharmacistForgotPassword />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
