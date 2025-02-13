
import React from 'react'
import { ButtomClick } from '../../components/ButtonCLick';
import { FormLogin } from '../../components/FormLogin';



const Login = () => {
    return (
    <>
      <div id="login" className="container">
        <FormLogin />
        <div className="segunda-div">
            <h2> Registre-se!</h2>
            <ButtomClick />
        </div>
        
    </div>
    </>
    );
}

export default Login;