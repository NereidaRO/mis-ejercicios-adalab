// Fichero src/components/App.js
// importamos useEffect además de useState

/*poner la llamada a fetch en la app no es recomendable, 
lo suyo es hacer una llamada a una función especificada en services*/
import { useEffect, useState } from "react";
import callToApi from "../services/api"; // Importamos el servicio que acabamos de crear

const App = () => {
  // Estados

  const [starWarsData, setStarWarsData] = useState({});

  // Llamar a la api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setStarWarsData(response);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  return (
    <div>
      <h1>Llamar a la API de Star Wars</h1>
      <h2>Características de {starWarsData.name}</h2>

      <ul>
        <li>Año de nacimiento: {starWarsData.birthYear}</li>
        <li>Estatura: {starWarsData.height} cm</li>
        <li>Peso: {starWarsData.mass} Kg</li>
        <li>Color de ojos: {starWarsData.eyeColor}</li>
      </ul>
    </div>
  );
};

export default App;
