import { useState } from "react";

export const UploadForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);

        const res = await fetch ("http://localhost:3000/gallery", {
            method: "POST",
            body: formData
        });

        const data = await res.json();

        console.log(data);
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Subir Ilustración</h2>

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
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            />

            <button type="submit">
                Subir
            </button>
        </form>
    );
};