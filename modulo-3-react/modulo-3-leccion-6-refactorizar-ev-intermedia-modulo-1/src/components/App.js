import "../styles/reset.scss";
import "../styles/App.scss";
import { useEffect, useState } from "react";
import ls from "../services/localStorage";
import Header from "./Header.js";
import Main from "./Main.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
