import React ,{useState}from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const localStorageValues = localStorage.getItem('token');
    const [token, setToken] = useState(localStorageValues);

    const userIsLogedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const ContextValue = {
        token:token,
        isLoggedIn:userIsLogedIn,
        LogIn:loginHandler,
        LogOut:logoutHandler
    }

    return (
        <AuthContext.Provider value={ContextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
