import { createContext, useEffect, useReducer } from "react";
//initial state
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};
//context creation
export const AuthContext = createContext(INITIAL_STATE);
//the reducer(manage state depending on the action)
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return { ...INITIAL_STATE, user: action.payload };
    case "LOGIN_FAILED":
      return { ...INITIAL_STATE, error: action.payload };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
//provider
export const AuthContextProvider = ({ children }) => {
  //initialize state
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  //save user to local storage
  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(state.user))
  },[state.user])
  //the provider
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
