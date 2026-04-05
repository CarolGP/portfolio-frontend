import { useEffect, useState } from "react";
import { getGallery } from "../services/api";

import "./Gallery.css";

export const Gallery = () => {

  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGallery().then(data => {
      setItems(data);
      setLoading(false);
    });

  }, []);

  if(loading){

    return <p className="loading">Cargando...</p>;

  }

  return(

    <section className="gallerySection">

      <div className="galleryGrid">

        {
          items.map((item, index) => {
            const sizeClass =
              index % 7 === 0 ? "large" :
              index % 5 === 0 ? "wide" : "";

            return (

              <div
                className={`galleryCard ${sizeClass}`}
                key={item._id}
                onClick={() => setSelectedImage(item.imageUrl)}
              >

                <img
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
            );
          })
        }
      </div>


      {selectedImage && (

        <div
          className="modalOverlay"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            className="modalImage"
          />

        </div>
      )}
    </section>
  );
};