import { createContext, useEffect, useReducer } from "react";
const savedSearch = JSON.parse(localStorage.getItem("search")) || {};
//initial state
const INITIAL_STATE = {
  city: savedSearch.city ?? undefined,
  dates: savedSearch.dates
    ? savedSearch.dates.map((date) => {
        return {
          ...date,
          startDate: new Date(date.startDate),
          endDate: new Date(date.endDate),
        };
      })
    : [{ startDate: new Date(), endDate: new Date(), key: "selection" }],
  options: {
    adult: savedSearch?.options?.adult ?? 1,
    children: savedSearch?.options?.children ?? 0,
    room: savedSearch?.options?.room ?? 1,
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
  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(state));
  }, [state]);
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
