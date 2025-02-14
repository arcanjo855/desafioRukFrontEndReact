import { useNavigate } from "react-router-dom";

export const ButtomRedirectRegister = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <button type="click" onClick={goToRegister}>Registre-se</button>
    </div>
  );
}


