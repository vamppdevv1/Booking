import { createContext, useReducer } from "react";
//initial state
const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};
//context creation
export const SearchContext = createContext(INITIAL_STATE);

//the reducer(manage state depending on the action)
const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};
//provider
export const SearchContextProvider = ({ children }) => {
  //initialize state
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  //the provider
  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
