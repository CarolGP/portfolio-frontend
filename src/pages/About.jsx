import "./About.css";

export const About = () => {

  return (

    <section className="aboutHero">

      <div className="aboutText">

        <h1 className="aboutTitle">
          Sobre mí
        </h1>


        <p>
          Soy ilustrador/a especializado/a en ilustración digital.
          Mi trabajo se centra en crear personajes expresivos,
          escenas narrativas y composiciones visuales con un estilo personal.
        </p>


        <p>
          Trabajo con herramientas digitales y combino creatividad
          y técnica para desarrollar imágenes que comuniquen ideas,
          emociones e historias.
        </p>


        <p>
          He realizado ilustraciones para proyectos editoriales,
          contenido digital y encargos personalizados.
        </p>

      </div>



      <img
        src="https://res.cloudinary.com/dnet6blln/image/upload/v1774806204/IMG_4894_rxcf7h.jpg"
        alt="ilustrador trabajando"
        className="aboutImage"
      />

    </section>

  );

};