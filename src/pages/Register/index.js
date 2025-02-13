
import React from 'react'
import { FormRegister } from '../../components/FormRegister';
import { ButtomClick } from '../../components/ButtonCLick';


const Register = () => {
    return (
    <>
    <div id="register" className="container">
        <h2>Criar Conta</h2>
            <FormRegister />
            <div className="segunda-div">
            <h2> Ja tem uma conta?</h2>
            <ButtomClick />
        </div>
        
    </div>
    </>
    );
}

export default Register;