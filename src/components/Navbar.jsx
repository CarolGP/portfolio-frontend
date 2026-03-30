import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {

  return (

    <nav className="navbar">

      <Link to="/" className="logo">
        Bruno Rodríguez
      </Link>

      <div className="navLinks">

        <Link to="/gallery">
          Galería
        </Link>


        <Link to="/portfolio">
          Portfolio
        </Link>

        <Link to="/contact">
          Contacto
        </Link>
        
        <Link to="/login">
          Login
        </Link>

      </div>

    </nav>

  );

};