import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";

function App() {
  //Variables de estado
  const [TVData, setTVData] = useState({}); //aquí se guarda lo que queremos renderizar

  //Llamar a la API
  useEffect(() => {
    callToApi().then((response) => {
      setTVData(response);
    });
  }, []);
  //El return para renderizar
  return (
    <div className="App">
      <h1>Series de TV con palabra "paranormal"</h1>
      <ul>
        <li>Título: {TVData.name}</li>
        <li>Puntuación: {TVData.score}</li>
      </ul>
    </div>
  );
}

export default App;
