import { Link } from "react-router-dom";

export const Navbar = () => {

  return (

    <nav>

      <Link to="/">Sobre mí</Link>

      <Link to="/gallery">Galería</Link>

      <Link to="/contact">Contacto</Link>

    </nav>

  );

};