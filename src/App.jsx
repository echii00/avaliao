import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from "./pages/Home/page";
import Contato from "./pages/contato/page";


export default function App() {
  return(
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contato" element={<Contato/>}/>
     </Routes>
    </Router>
    
    <Footer/>
    </>
  )
}

