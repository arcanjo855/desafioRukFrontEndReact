import { useState } from "react";
import axios from "axios";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [area_code, setAreaCode] = useState("");
  const [number, setNumber] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/register", { name, email, password, number, area_code });
      console.log("Usuário adicionado:");
      window.location.href = "/login";
    } catch (error) {
      alert("Erro ao adicionar usuário")
      console.error("Erro ao adicionar usuário");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <label>Nome</label>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Email</label>
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Senha</label>
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setpassword(e.target.value)} />
      <label>DDD</label>
        <input type="number" placeholder="DDD" value={area_code} onChange={(e) => setAreaCode(e.target.value)} />
      <label>Telefone</label>
        <input type="number" placeholder="Telefone" value={number} onChange={(e) => setNumber(e.target.value)} />
        <br ></br><br ></br>
      <button type="submit">Fazer login</button>
    </form>
  );
}