import axios from "axios";

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import ShopPage from "./pages/Shop/ShopPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ContactPage from "./pages/Contact/ContactPage";
axios.defaults.baseURL = "http://localhost:4000";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/shop">Shop</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
