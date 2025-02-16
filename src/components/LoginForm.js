import { useState } from "react";
import axios from "axios";



export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", { email, password });
      console.log("Usuário adicionado");
      const token = response.data.token;
      localStorage.setItem("token", token)
      window.location.href = "/home";
  
    } catch (error) {
      alert("login ou senha incorretas")
      console.error("Erro ao fazer login");
    }
    
    
  };   
  
   


  
  return (
    
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Email</label>
      <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Senha</label>
      <input type="password" placeholder="Nome" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br ></br><br ></br>
      <button type="submit">Fazer login</button>
    </form>
  );
}