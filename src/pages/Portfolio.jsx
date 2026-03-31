import { useEffect, useState } from "react";
import "./Portfolio.css";

export const Portfolio = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3000/portfolio")
      .then(res => res.json())
      .then(data => {

        console.log(data);
        setImages(data);

      });

  }, []);

  return(

    <section className="portfolio">

      <h1 className="portfolioTitle">
        Portfolio
      </h1>

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