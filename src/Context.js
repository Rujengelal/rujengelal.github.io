import { createContext, useReducer } from "react";
export const themeContext = createContext();
const initialState = { darkMode: false };
const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};
export default ThemeProvider;
