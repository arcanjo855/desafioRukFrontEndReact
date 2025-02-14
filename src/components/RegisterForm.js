import { useState } from 'react';

export const RegisterForm = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    ddd: '',
    telephone: ''
  });

  // Estado para armazenar a lista de dados submetidos
  const [dadosSubmetidos, setDadosSubmetidos] = useState([]);

  // Função para atualizar o estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados submetidos:', formData);

    // Adiciona os dados à lista (opcional)
    setDadosSubmetidos([...dadosSubmetidos, formData]);

    // Limpa o formulário após o envio
    setFormData({ nome: '', email: '', senha: '', ddd: '', telephone: ''});
  };

  return (
    <div>
    <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit}>

      <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          DDD:
          <input
            type="number"
            name="ddd"
            value={formData.ddd}
            onChange={handleChange}
            required
          />
        </label>


        <label>
          Telefone:
          <input
            type="number"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Registrar-se</button>
      </form>

      {/* Exibir dados submetidos */}
      <div>
        <h3>Dados Enviados:</h3>
        <ul>
          {dadosSubmetidos.map((dado, index) => (
            <li key={index}>
                {dado.nome} <br /> {dado.email} <br /> {dado.senha} <br /> {dado.ddd} <br /> {dado.telephone} 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};