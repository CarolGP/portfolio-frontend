import { useState } from "react";

export const Login = () => {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");



  const handleLogin = async () => {

    const res = await fetch("http://localhost:3000/auth/login", {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        username,

        password

      })

    });



    const data = await res.json();



    if(data.success){

      localStorage.setItem("auth","true");

      window.location.href="/admin";

    } else {

      alert("Credenciales incorrectas");

    }

  };



  return(

    <section className="loginSection">

      <h1>
        Login
      </h1>



      <input

        type="text"

        placeholder="Usuario"

        value={username}

        onChange={(e)=> setUsername(e.target.value)}

      />



      <input

        type="password"

        placeholder="Contraseña"

        value={password}

        onChange={(e)=> setPassword(e.target.value)}

      />



      <button onClick={handleLogin}>

        Entrar

      </button>

    </section>

  );

};