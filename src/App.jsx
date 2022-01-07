import "./App.scss";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details";
import MainSlider from "./pages/mainSlider/MainSlider";
import { Routes, Route } from "react-router-dom";
import Nav from "./pages/nav/Nav";
import Footer from "./pages/footer/Footer";
import AllMovieTv from "./pages/allMoveiTv/AllMovieTv";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:cat" element={<AllMovieTv />} />
        <Route path="/:cat/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
