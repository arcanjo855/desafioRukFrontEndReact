
import React from 'react'
import { ButtomOut } from '../../components/ButtomOut';
import { ButtomSearch } from '../../components/ButtomSearch';



const Home = () => {
    return (
    <>
    <div id="login" className="container">
        <h2>Buscar dados</h2>
            <ButtomSearch />
        <div className="segunda-div">
            <ButtomOut />
        </div>
        
    </div>
    </>
    );
}

export default Home;