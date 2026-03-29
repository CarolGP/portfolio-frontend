import { useState } from "react";

export const Login = () => {

  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if(password === "1234"){
      localStorage.setItem("auth", "true");
      window.location.href = "/admin";
    }

  };


  return(

    <div>

      <h1>Login</h1>


      <input
        type="password"
        placeholder="contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />


      <button onClick={handleLogin}>
        Entrar
      </button>

    </div>

  );

};