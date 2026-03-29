import { useEffect, useState } from "react";
import { getGallery } from "../services/api";
import { UploadForm } from "../components/UploadForm";

export const Gallery = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getGallery().then(data => {
            console.log(data);

            setItems(data);
         });
    }, []);

    const deleteItem = async (id) => {
        await fetch (`http://localhost:3000/gallery/${id}`, {
            method: "DELETE"
        });

        setItems(items.filter(item => item._id !== id));
    }

    return(
        <div>
            <h1>Galería</h1>

            <UploadForm />

            {
              items.map(item => (
                <div key={item.id}>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <img src={item.imageUrl}
                    width="200"/>

                    <button onClick={() => deleteItem(item._id)}>
                        Borrar
                    </button>
                </div>
                ))
            }
        </div>
    );
};