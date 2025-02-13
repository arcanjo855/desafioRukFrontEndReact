
import React from 'react'
import { ButtomClick } from '../../components/ButtonCLick';


const Home = () => {
    return (
    <>
    <div id="login" className="container">
        <h2>Buscar dados</h2>
        <div className="form-group">
            
            <ButtomClick />
        </div>
        <div >
            <p id="emailResult"> </p>
            <p id="idResult"> </p>
            <p id="telefoneResult"> </p>
            <p id="criadoResult"> </p>
            <p id="modificaResult"> </p>
        </div>
        <div className="segunda-div">
            <h2> Sair</h2>
            <ButtomClick />
        </div>
        
    </div>
    </>
    );
}

export default Home;