import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUSer] = useState();
    
    useEffect(() => {
        const userToken = localStorage.getItem("token");
        const usersStorage = localStorage.getItem("user_db")

        if(userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );
            if(hasUser) setUSer(hasUser[0]);
        }


    }, []);


    return <AuthContext.Provider>{ children }</AuthContext.Provider>
}