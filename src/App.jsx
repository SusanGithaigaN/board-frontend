import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import NavBar from './navigation/NavBar';
import Footer from './navigation/Footer';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
