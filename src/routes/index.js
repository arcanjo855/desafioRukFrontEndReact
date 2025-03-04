import { Fragment } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/Register";

const Private = ({ Item }) => {
    const signed = true;
    
    return signed > 0 ? <Item /> : <Login />;
}




const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={ <Private Item={Home} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;