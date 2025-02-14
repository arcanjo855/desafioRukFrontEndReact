
import React from 'react'
import { LoginForm } from '../../components/LoginForm';
import { ButtomRedirectRegister } from '../../components/ButtomRedirectRegister';



const Login = () => {
    return (
    <>
      <div id="login" className="container">
        <LoginForm />
        <div className="segunda-div">
            <h2>Ainda nao tem uma conta?</h2>
            <ButtomRedirectRegister />
        </div>
        
    </div>
    </>
    );
}

export default Login;


