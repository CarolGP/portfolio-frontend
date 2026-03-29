import { useEffect } from "react";
import { UploadForm } from "../components/UploadForm";

export const Admin = () => {

  useEffect(() => {

    const auth = localStorage.getItem("auth");

    if(auth !== "true"){

      window.location.href = "/login";

    }

  }, []);



  return(

    <div>

      <h1>Panel admin</h1>

      <UploadForm />

    </div>

  );

};