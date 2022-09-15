import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Background from './components/background';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Background/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
