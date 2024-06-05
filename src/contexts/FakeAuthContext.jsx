import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}
const FAKE_USER = {
  name: "Zaw Hein Htet",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(name, password) {
    if(FAKE_USER.email === name && FAKE_USER.password === password){
        dispatch({type:'login',payload:FAKE_USER})
    }
  }

  function logout() {
    dispatch({type : 'logout'})
  }
  
  return (
    <AuthContext.Provider value={{ login,logout,isAuthenticated,user }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Authcontext was used outhside the provider");
  return context;
}

export { AuthProvider, useAuth };
