import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
    min-height: 100vh;
    padding: 2rem;
}


.container {
    background: white;
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

h2 {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    text-align: center;
}

.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #64748b;
    font-size: 0.9rem;
    font-weight: 500;
}

input {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

button[type="click"] {
    width: 100%;
    padding: 1rem;
    background: #6366f1;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

button[type="click"]:hover {
    background: #4f46e5;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.3);
}


button[type="submit"] {
    width: 100%;
    padding: 1rem;
    background: #6366f1;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

button[type="submit"]:hover {
    background: #4f46e5;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.3);
}


.segunda-div {
    margin-top: 30px;
}




@media (max-width: 480px) {
    body {
        padding: 1rem;
    }
    
    .container {
        padding: 1.5rem;
    }
    
    .nav {
        flex-direction: column;
    }
    
    .nav-button {
        width: 100%;
    }
}
`;


export default GlobalStyle;