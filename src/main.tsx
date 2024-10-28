import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import theme from "./themes/default.ts";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  // </StrictMode>
);
