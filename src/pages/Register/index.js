
import React from 'react'
import { RegisterForm } from '../../components/RegisterForm';
import { ButtomRedirectLogin } from '../../components/ButtomRedirectLogin';


const Register = () => {
    return (
    <>
    <div id="register" className="container">
            <RegisterForm />
            <div className="segunda-div">
            <h2> Ja tem uma conta?</h2>
            <ButtomRedirectLogin />
        </div>
        
    </div>
    </>
    );
}

export default Register;