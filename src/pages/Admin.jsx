import { useEffect, useState } from "react";
import { UploadForm } from "../components/UploadForm";
import { getGallery } from "../services/api";

import "./Admin.css";

export const Admin = () => {

  const [items, setItems] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    title:"",
    description:""
  });


  const logout = () => {

    localStorage.removeItem("auth");

    window.location.href="/";

  };


  useEffect(() => {

    const auth = localStorage.getItem("auth");

    if(auth !== "true"){
      window.location.href="/login";
    }

    loadGallery();
    loadPortfolio();

  }, []);



  const loadGallery = () => {

    getGallery().then(data => {

      setItems(data);

    });

  };


  const loadPortfolio = async () => {

    const res = await fetch("http://localhost:3000/portfolio");

    const data = await res.json();

    setPortfolioItems(data);

  };



  const deleteItem = async (id) => {

    await fetch(`http://localhost:3000/gallery/${id}`, {

      method:"DELETE"

    });

    loadGallery();
    loadPortfolio();

  };



  const startEdit = (item) => {

    setEditingId(item._id);

    setEditData({

      title:item.title || "",

      description:item.description || ""

    });

  };



  const handleEditChange = (e) => {

    setEditData({

      ...editData,

      [e.target.name]: e.target.value

    });

  };



  const saveEdit = async (id) => {

    await fetch(`http://localhost:3000/gallery/${id}`, {

      method:"PUT",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify(editData)

    });

    setEditingId(null);

    loadGallery();
    loadPortfolio();

  };



  return(

    <section className="adminSection">

      <h1 className="adminTitle">
        Panel admin
      </h1>

      <button onClick={logout}>
        Logout
      </button>



      <UploadForm onUpload={()=>{
        loadGallery();
        loadPortfolio();
      }} />



      <h2>Gallery</h2>

      <div className="adminGrid">

        {

          items.map(item => (

            <div
              key={item._id}
              className="adminCard"
            >

              <img
                src={item.imageUrl}
                alt={item.title}
              />


              {

                editingId === item._id ? (

                  <>

                    <input
                      name="title"
                      value={editData.title}
                      onChange={handleEditChange}
                      placeholder="Título"
                    />


                    <textarea
                      name="description"
                      value={editData.description}
                      onChange={handleEditChange}
                      placeholder="Descripción"
                    />


                    <button
                      onClick={() => saveEdit(item._id)}
                    >
                      Guardar
                    </button>

                  </>

                ) : (

                  <>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>


                    <button
                      onClick={() => startEdit(item)}
                    >
                      Editar
                    </button>

                  </>

                )

              }



              <button
                onClick={() => deleteItem(item._id)}
              >
                Borrar
              </button>

            </div>

          ))

        }

      </div>



      <h2>Portfolio</h2>

      <div className="adminGrid">

        {

          portfolioItems.map(item => (

            <div
              key={item._id}
              className="adminCard"
            >

              <img
                src={item.imageUrl}
                alt={item.title}
              />


              {

                editingId === item._id ? (

                  <>

                    <input
                      name="title"
                      value={editData.title}
                      onChange={handleEditChange}
                      placeholder="Título"
                    />


                    <textarea
                      name="description"
                      value={editData.description}
                      onChange={handleEditChange}
                      placeholder="Descripción"
                    />


                    <button
                      onClick={() => saveEdit(item._id)}
                    >
                      Guardar
                    </button>

                  </>

                ) : (

                  <>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>


                    <button
                      onClick={() => startEdit(item)}
                    >
                      Editar
                    </button>

                  </>

                )

              }



              <button
                onClick={() => deleteItem(item._id)}
              >
                Borrar
              </button>

            </div>

          ))

        }

      </div>



    </section>

  );

};