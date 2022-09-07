import { useState } from "react";
import {
  styledLogo,
  styledReactLogo,
  styledVanillaExtractLogo,
} from "./styles/Logo.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className={styledLogo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src="/react.svg" className={styledReactLogo} alt="React logo" />
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
    </div>
  );
}

export default App;
