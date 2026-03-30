import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";

function App(){
    return(
        <BrowserRouter>

          <Navbar />
          
          <Routes>

            <Route path="/" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/portfolio" element= {<Portfolio />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path= "/login" element={<Login />} />
            <Route path= "/admin" element={<Admin />} />

          </Routes>
        </BrowserRouter>
    );
}

export default App;


