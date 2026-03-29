import { useEffect, useState } from "react";
import { getGallery } from "../services/api";

import "./Gallery.css";


export const Gallery = () => {

  const [items, setItems] = useState([]);


  useEffect(() => {

    getGallery().then(data => {

      setItems(data);

    });

  }, []);



  return(

    <section className="gallerySection">

      <h1 className="galleryTitle">
        Galería
      </h1>


      <div className="galleryGrid">

        {

          items.map((item) => (

            <div
              className="galleryCard"
              key={item._id}
            >

              <img
                src={item.imageUrl}
                alt={item.title}
              />

            </div>

          ))

        }

      </div>

    </section>

  );

};