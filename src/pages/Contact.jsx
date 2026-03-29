import "./Contact.css";

export const Contact = () => {

  return(

    <section className="contactHero">

      <div className="contactText">

        <h1 className="contactTitle">
          Bruno Rodíguez
        </h1>

        <p className="contactSubtitle">
          ¿Tienes un proyecto en mente?
          Cuéntame tu idea.
        </p>

        <a
          href="mailto:tuemail@email.com"
          className="contactButton"
        >
          Escribirme
        </a>

        <a
        href="https://instagram.com/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        >
  <img
    src="https://res.cloudinary.com/dnet6blln/image/upload/v1774809032/instagram_fdzpxu.png"
    alt="Instagram"
    className="instagramLogo"
  />
</a>
        
      </div>


      <div className="contactIllustration">
        <img
          src="https://res.cloudinary.com/dnet6blln/image/upload/v1774806204/IMG_4894_rxcf7h.jpg"
          alt="Imagen de Bruno Rodríguez, ilustrador"
          className="contactImage"
        />
      </div>


    </section>

  );
};