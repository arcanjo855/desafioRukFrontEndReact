import { useNavigate } from "react-router-dom";

export const ButtomRedirectLogin = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <button type="click" onClick={goToLogin}>Ir para o login</button>
    </div>
  );
}


