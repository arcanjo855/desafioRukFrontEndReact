
import React from 'react'
import { RegisterForm } from '../../components/RegisterForm';
import { Buttom } from '../../components/Button';


const Register = () => {
    return (
    <>
    <div id="register" className="container">
        <h2>Criar Conta</h2>
            <RegisterForm />
            <div className="segunda-div">
            <h2> Ja tem uma conta?</h2>
            <Buttom />
        </div>
        
    </div>
    </>
    );
}

export default Register;