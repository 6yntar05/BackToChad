import React, {useState, createContext, useContext, useCallback} from 'react';
import UsersApi from "../api/users";
import {getTokenFromStorage, saveTokenToStorage} from "../localStorage/tokenStorage";


function AuthProvider(props: {children: React.ReactNode}) {
    const [token, setToken] = useState(getTokenFromStorage);
    const [loading, setLoading] = useState(false);

    const signIn = useCallback(async (login: string, password: string) => {
        setLoading(true);
        try {
            const result = await UsersApi.login(login, password, token);
            setToken(result.token);
            saveTokenToStorage(result.token);
            return result.token;
        } finally {
            setLoading(false);
        }
    }, [token]);

    const signOut = useCallback( () => {
        setToken(null);
    }, []);

    const signUp = useCallback(async (login: string, password: string) => {
        setLoading(true);
        try {
            const createdUser = await UsersApi.create(login, password);
            const loginResp = await UsersApi.login(login, password);
            setToken(loginResp.token);
            saveTokenToStorage(loginResp.token);
            return loginResp.token;
        } finally {
            setLoading(false);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            token: token,
            signIn,
            signUp,
            signOut,
            loading
        }} {...props}/>
    );
}

interface AuthContextState {
    token: string | null,
    signIn: (login: string, password: string) => Promise<string>,
    signUp: (login: string, password: string) => Promise<string>,
    signOut: () => void,
    loading: boolean
}

const AuthContext = createContext<AuthContextState | undefined>(undefined);
const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("AuthContext is not provided")
    return context
};

export {AuthProvider, useAuth}
