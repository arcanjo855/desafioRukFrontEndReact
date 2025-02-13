
import React from 'react'
import { Buttom } from '../../components/Button';
import { LoginForm } from '../../components/LoginForm';



const Login = () => {
    return (
    <>
      <div id="login" className="container">
        <LoginForm />
        <div className="segunda-div">
            <h2> Registre-se!</h2>
            <Buttom />
        </div>
        
    </div>
    </>
    );
}

export default Login;