import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUSer] = useState();
    
    useEffect(() => {
        const userToken = localStorage.getItem("token");
        const usersStorage = localStorage.getItem("users_db")

        if(userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );
            if(hasUser) setUSer(hasUser[0]);
        }


        const signin = (email, password) => {
            const usersStorage = JSON.parse(localStorage.getItem("users_db"));
            const hasUser = usersStorage?.filter((user) => user.email === email);

            if(hasUser?.length) {
                if(hasUser[0].email === email && hasUser.password === password) {
                    const token = Math.random().toString(38).substring(2);
                    localStorage.setItem("user_token", JSON.stringify({email, token}));
                    setUSer({ email, password });
                    return;
                }else{
                    return "Email ou senha incorreta"
                }
            }else {
                return "usuario nao cadastrado"
            }
        }

        const signup = (email, password) => {
            const usersStorage = JSON.parse(localStorage.getItem("users_db"));
            const hasUser = usersStorage?.filter((user) => user.email === email);

            if(hasUser?.length) {
                if(hasUser?.length) {
                return "ja existe um usuario com este email"
        }
        let newUser;
        
        if(usersStorage){
            newUser = [...usersStorage, {email, password}]
        }else{
            newUser = {email, password}
        }

        localStorage.setItem("user_db",JSON.stringify(newUser));

        return 
    }
        const sigout = () => {
            setUSer(null);
            localStorage.removeItem("user_token")
        }

    return(
        <AuthContext.AuthProvider 
        value={{user, signed: !!user, signin, signup, sigout}}
        >
            {children}
        </AuthContext.AuthProvider>
    )

    }
    }, []);


    
}