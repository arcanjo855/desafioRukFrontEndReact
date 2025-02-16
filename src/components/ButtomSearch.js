import { useState } from "react";
import axios from "axios";



export const ButtomSearch = () => {
  const [data, setData] = useState("");



  const handleClick = async(e) => {
    e.preventDefault();
    

    try {

      const axiosConfig = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
            }
      }
      const response = await axios.get("http://localhost:3000/userInfo",axiosConfig, { axiosConfig });
      setData(response.data)
      
    } catch (error) {
      alert("Voce precisa estar logado para ver os dados")
      console.error("Erro ao buscar dados");
    }
    
  };   
  
   


  
  return (
    <>
    <button type="click" onClick={handleClick}>Ver dados</button>

    {data ? (
      <>
      <br/><br/>
      <p>Email: {JSON.stringify(data.email)}</p>
      <p>ID: {JSON.stringify(data.id)}</p>
      <p>Telefone: ({JSON.stringify(data.area_code)}) {JSON.stringify(data.number)}</p>
      <p>Criado em: {JSON.stringify(data.created_at)}</p>
      <p>Modificado em: {JSON.stringify(data.modified_at)}</p>
      </>
    ): (
      <>
      <br/><br/>
      <p>Carregando...</p>
      </>
    )}
    </>
      

  );
}