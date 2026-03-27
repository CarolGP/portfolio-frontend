import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";

function App(){
    return(
        <BrowserRouter>

          <Navbar />
          
          <Routes>

            <Route path="/" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </BrowserRouter>
    );
}

export default App;


