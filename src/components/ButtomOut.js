import { useNavigate } from "react-router-dom";

export const ButtomOut = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
        <h2> Sair</h2>
        <button type="click" onClick={goToLogin}>Sair</button>
    </div>
  );
}