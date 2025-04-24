import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import NavBar from './components/Navigation/NavBar';

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
