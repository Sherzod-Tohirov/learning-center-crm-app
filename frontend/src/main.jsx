import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, WuiProvider } from "@welcome-ui/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "../router.jsx";
import { store } from "./store/store.js";
const theme = createTheme();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WuiProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </WuiProvider>
  </StrictMode>
);
