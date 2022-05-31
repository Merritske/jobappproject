import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from 'react-router-dom'
import Blog from "./pages/Blog"
import Jobs from "./pages/Jobs"
import Apply from "./pages/Apply"
import Work from "./components/Work"
import NavbarHome from "./components/Navbar";
import Footer from "./components/Footer";
 


function App() {
  return (
    <div className="App">
     <NavbarHome/>

      <Routes>

        <Route exact path="/" element={<Home />} />
        
       <Route path="/Work" element={<Work />} /> 
        <Route exact path="/Jobs" element={<Jobs />} />
        <Route exact path="/Apply" element={<Apply />} />
        <Route exact path="/Blog" element={<Blog />} />

      </Routes>
<Footer/>
    </div>
  );
}

export default App;
