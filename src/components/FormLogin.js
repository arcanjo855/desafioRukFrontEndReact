

export const FormLogin = () => {
    function submitDadosLogin() {
        alert(`formulario enviado`);
      }


    return (
        <>
        <form id="formLogin" action={submitDadosLogin}>
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