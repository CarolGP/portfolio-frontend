import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {

  return (

    <nav className="navbar">

      <div className="logo">
        Bruno Rodríguez
      </div>


      <div className="navLinks">

        <Link to="/">Sobre mí</Link>

        <Link to="/gallery">Galería</Link>

        <Link to="/contact">Contacto</Link>

        <Link to="/login">Login</Link>

      </div>

    </nav>

  );

};