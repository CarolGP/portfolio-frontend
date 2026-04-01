import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {

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