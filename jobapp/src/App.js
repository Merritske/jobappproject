import Home from "./pages/Home";
import "./styles/App.css";
import {Routes,Route} from 'react-router-dom'
import Blog  from "./components/Blog" 
import Jobs from "./pages/Jobs" 
import Contact from "./pages/Contact" 
import Apply from "./pages/Apply" 
import Work  from "./components/Blog" 
import Navbar from "./components/Navbar";
 
function App() {
  return (
    <div className="App">
    
       
       
      

       <Routes>
         
                   <Route exact path="/" element={<Home />}/> 
            
            <Route path="/Work" element={<Work />} />

            <Route exact path="/Jobs" element={<Jobs />} />
            <Route exact path="/Contact" element={<Contact/>} />
            <Route exact path="/Apply" element={<Apply />} />
            <Route exact path="/Blog" element={<Blog />} />
           
       
            
            
          </Routes>
    
           
        
           
         
       
    </div>
  );
}

export default App;
