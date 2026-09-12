import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import {AuthContextProvider} from "./context/AuthContext.jsx"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </AuthContextProvider>
  </StrictMode>,
);
