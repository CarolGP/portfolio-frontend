import { Link } from "react-router-dom";
import { useState } from "react";

import "./NavBar.css";

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (

    <nav className="navbar">
      <Link to="/" className="brand">
        <img
          src="https://res.cloudinary.com/dnet6blln/image/upload/q_auto/f_auto/v1775065890/Logo_tovh87.png"
          alt="logo"
          className="brandLogo"
        />

        <span className="brandName">
          Bruno Rodríguez
        </span>
      </Link>

      <button
        className="menuButton"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>


      <div className={`navLinks ${open ? "open" : ""}`}>

        <Link to="/gallery" onClick={() => setOpen(false)}>
          Galería
        </Link>

        <Link to="/portfolio" onClick={() => setOpen(false)}>
          Portfolio
        </Link>

        <Link to="/contact" onClick={() => setOpen(false)}>
          Contacto
        </Link>

        <Link to="/login" onClick={() => setOpen(false)}>
          Login
        </Link>
      </div>
    </nav>
  );
};