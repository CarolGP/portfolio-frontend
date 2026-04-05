import { useState } from "react";
import "./Login.css";

const API_URL = import.meta.env.VITE_API_URL;

export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const res = await fetch(`${API_URL}/auth/login`, {
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

      <div className="loginBox">

        <h1 className="loginTitle">
          Login
        </h1>


        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          className="loginInput"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          className="loginInput"
        />

        <button
          onClick={handleLogin}
          className="loginButton"
        >
          Entrar
        </button>
      </div>
    </section>
  );
};