import { useState } from 'react';

export const LoginForm = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
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
    setFormData({ email: '', senha: '' });
  };


  

  return (
    <div>
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>

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

        <button type="submit">Login</button>
      </form>

      {/* Exibir dados submetidos */}
      <div>
        <h3>Dados Enviados:</h3>
        <ul>
          {dadosSubmetidos.map((dado, index) => (
            <li key={index}>
                {dado.email} <br></br> {dado.senha}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

