import { useState } from "react";
import {
  styledLogo,
  styledReactLogo,
  styledVanillaExtractLogo,
} from "@/styles/logo.css";
import { darkTheme, lightTheme } from "@/styles/theme.css";
import { Button } from "@/components/Button";
import { appStyles } from "@/App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div id="app" className={isDarkTheme ? darkTheme : lightTheme}>
      <div className={appStyles}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className={styledLogo} alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img
              src="/react.svg"
              className={styledReactLogo}
              alt="React logo"
            />
          </a>
          <a href="https://vanilla-extract.style" target="_blank">
            <img
              src="/vanilla-extract.svg"
              className={styledVanillaExtractLogo}
              alt="React logo"
            />
          </a>
        </div>
        <h1>Vite + React + Vanilla Extract</h1>
        <Button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Switch Theme
        </Button>
      </div>
    </div>
  );
}

export default App;
