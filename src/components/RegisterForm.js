export const RegisterForm = () => {
    function submitRegister() {
        alert(`formulario enviado`);
      }

    return (
        <>
        <form action={submitRegister}> 
            <div className="form-group">
                <label>Nome</label>
                <input type="text" id="registerName" required />
              
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" id="registerEmail" required />
            </div>
            <div className="form-group">
                <label>Senha</label>
                <input type="password" id="registerPassword" required />
            </div>
            <div className="form-group">
                <label>DDD</label>
                <input type="number" id="registerDDD" required />
            </div>
            <div className="form-group">
                <label>telefone</label>
                <input type="number" id="registerTelefone" required />
            </div>
            <button type="submit">Registrar</button>
        </form>
        </>
    )
}
