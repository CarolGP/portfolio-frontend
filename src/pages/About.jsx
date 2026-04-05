import "./About.css";

export const About = () => {

  return (

    <section className="aboutSection">

      <h1 className="aboutTitle">
        Sobre mí
      </h1>

      <div className="aboutHero">

        <div className="aboutText">

          <p className="aboutParagraph">
            Soy Bruno, ilustrador especializado en ilustración digital.
            Mi trabajo se centra en crear personajes expresivos,
            escenas narrativas y composiciones visuales con un estilo personal.
          </p>

          <p className="aboutParagraph">
            Trabajo con herramientas digitales y combino creatividad
            y técnica para desarrollar imágenes que comuniquen ideas,
            emociones e historias.
          </p>

          <p className="aboutParagraph">
            He realizado ilustraciones para proyectos editoriales,
            contenido digital y encargos personalizados.
            Estoy disponible para colaboraciones y nuevos proyectos.
          </p>

        </div>

        <img
          src="https://res.cloudinary.com/dnet6blln/image/upload/v1774806204/IMG_4894_rxcf7h.jpg"
          alt="ilustrador trabajando"
          className="aboutImage"
        />

      </div>
    </section>
  );
};