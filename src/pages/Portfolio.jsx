import { useEffect, useState } from "react";
import { getPortfolio } from "../services/api";

import "./Portfolio.css";

export const Portfolio = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    getPortfolio().then(data => {

      console.log(data);
      setImages(data);
      setLoading(false);

    });

  }, []);


  if(loading){

    return <p className="loading">Cargando...</p>;

  }


  return(

    <section className="portfolio">

      <div className="portfolioGallery">

        {images.map((item) => (

          <img
            key={item._id}
            src={item.imageUrl}
            alt={item.title}
            className="portfolioImage"
          />

        ))}

      </div>

    </section>

  );

};