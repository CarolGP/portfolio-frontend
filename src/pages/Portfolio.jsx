import { useEffect, useState } from "react";
import { getPortfolio } from "../services/api";

import "./Portfolio.css";

export const Portfolio = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {

    getPortfolio().then(data => {

      console.log(data);
      setImages(data);

    });

  }, []);

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