import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PortfolioContainer from "./pages/portfolioContainer";
import TestimonialContainer from "./pages/testimonialContainer";
import Contact from "./pages/contact";
import About from "./pages/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  const location = useLocation();
  const homePage = location.pathname === "/jacqueline-walsh-portfolio/";

  return (
    <div className="App">
      <Navbar />

      <div className={!homePage ? "pages" : ""}>
        <Routes>
          <Route
            exact
            path="/jacqueline-walsh-portfolio/"
            element={<Home />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/portfolio"
            element={<PortfolioContainer />}
          ></Route>
          <Route
            exact
            path="/testimonials"
            element={<TestimonialContainer />}
          ></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      {!homePage && <Footer />}
    </div>
  );
}

export default App;
