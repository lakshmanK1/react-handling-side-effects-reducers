import React ,{useState}from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const userIsLogedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
    }

    const logoutHandler = () => {
        setToken(null);
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
