import { useState } from "react";
import "./Contact.css";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = () => {
    if(!formData.name || !formData.email || !formData.message){
      alert("Completa todos los campos");

      return;
    }
    setLoading(true);

    // Envío simulado son conectar con un email
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setFormData({
        name:"",
        email:"",
        message:""
      });
    }, 800);
  };


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
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Cuéntame tu proyecto"
            value={formData.message}
            onChange={handleChange}
          />


          <div className="contactActions">

            <button
              type="button"
              className="contactButton"
              onClick={handleSubmit}
              disabled={loading}
            >

              {loading ? "Enviando..." : "Enviar"}

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


          {sent && (
            <p style={{marginTop:"10px"}}>
              Mensaje enviado correctamente
            </p>
          )}
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