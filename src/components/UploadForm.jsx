import { useState } from "react";

export const UploadForm = ({ onUpload }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [section, setSection] =useState("gallery");



    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);

        formData.append("section", section);



        const res = await fetch("http://localhost:3000/gallery", {

            method: "POST",
            body: formData

        });



        const data = await res.json();

        console.log(data);



        // limpiar formulario
        setTitle("");
        setDescription("");
        setImage(null);



        // recargar galería automáticamente
        if(onUpload){
            onUpload();
        }

    };



    return(

        <form onSubmit={handleSubmit}>

            <h2>Subir ilustración</h2>


            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />


            <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />


            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />

            <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            >
                <option value="gallery">
                    Galería
                </option>

                <option value="portfolio">
                    Portfolio
                </option>

            </select>

            <button type="submit">
                Subir
            </button>

        </form>

    );

};