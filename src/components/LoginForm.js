

export const LoginForm = () => {
    function submitLogin() {
        alert(`formulario enviado`);
      }


    return (
        <>
        <form id="formLogin" action={submitLogin}>
            <h2>Login</h2>
                <div className="form-group">
                    <label>Email</label>
                   <input type='email' required/>
                </div>
                <div className="form-group">
                    <label>Senha</label>     
                    <input type="password" id="registerPassword" />
                    </div>

                <button type="submit">Entrar</button>
        </form>
        </>
    )
}