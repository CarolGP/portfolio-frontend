import "./Contact.css";

export const Contact = () => {

  return(

    <section className="contactHero">

      <div className="contactText">

        <h1 className="contactTitle">
          ¿Tienes un proyecto en mente?
        </h1>

        <p className="contactSubtitle">
          Cuéntame tu idea.
        </p>

        <form className="contactForm">

          <input
            type="text"
            placeholder="Nombre"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <textarea
            placeholder="Cuéntame tu proyecto"
          />

          <div className="contactActions">

            <button
              type="button"
              className="contactButton"
            >
              Enviar
            </button>

            <a
              href="https://instagram.com/brunorodrigvez"
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

        </form>

      </div>


      <div className="contactImageContainer">

        <img
          src="https://res.cloudinary.com/dnet6blln/image/upload/q_auto/f_auto/v1775065890/Logo_tovh87.png"
          alt="Ilustración contacto"
          className="contactImage"
        />

      </div>

    </section>

  );

};