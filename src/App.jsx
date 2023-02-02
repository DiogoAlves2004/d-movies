import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css'

//pages
import Home from './components/pages/Home'
import Series from "./components/pages/Series";
import Filmes from "./components/pages/Filmes";


//components
import Navbar from './components/layout/navbar/Navbar'
import Footer from "./components/layout/footer/Footer";

function App() {


return (
  <div className="App">



    <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/filmes" element={<Filmes />} />
        </Routes>

        <Footer />

    </Router>

  </div>


);
}

export default App;
