// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ReportScam from "./Pages/ReportScam";
import ScamReports from "./Pages/ScamReports";

// Placeholder pages (you will create these later)
const AboutUs = () => <div className="p-10 text-center">About Us Page</div>;
const Reports = () => <div className="p-10 text-center">Reports Page</div>;
const Categories = () => <div className="p-10 text-center">Categories Page</div>;
const Contact = () => <div className="p-10 text-center">Contact Page</div>;
const Blog = () => <div className="p-10 text-center">Blog Page</div>;
const FAQ = () => <div className="p-10 text-center">FAQ Page</div>;
const Support = () => <div className="p-10 text-center">Support Page</div>;
const PrivacyPolicy = () => <div className="p-10 text-center">Privacy Policy Page</div>;

function App() {
  return (
   
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reportScam" element={<ReportScam />} />
            <Route path="/scamReports" element={<ScamReports/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
      </div>

  );
}

export default App;
