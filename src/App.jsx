import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NavBar from "./navigation/NavBar";
import Footer from "./navigation/Footer";
import JobDetails from "./common/JobDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<JobDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
