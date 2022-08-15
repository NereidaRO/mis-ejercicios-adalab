import "../styles/App.scss";
import { useEffect, useState } from "react";
import ls from "../services/localStorage";

const App = () => {
  // Estados

  return (
    <div>
      <h2>Usando el local storage:</h2>

      <form>
        <label htmlFor="name">Escribe tu nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Maricarmen"
          value={name}
          onChange={handleName}
        />
        <label htmlFor="email">Escribe tu email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="mari.carmen@gmail.com"
          value={email}
          onChange={handleEmail}
        />
      </form>

      <h2>Tus datos son:</h2>
      <p>Tu nombre es: {name}</p>
      <p>Tu email es: {email}</p>
    </div>
  );
};

export default App;
