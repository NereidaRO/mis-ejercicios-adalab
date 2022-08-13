import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";

function App() {
  //Variables de estado
  const [TVresults, setTVresults] = useState([]); //array API
  const [searchName, setSearchName] = useState(""); //lo del input, mismo nombre que en api.js

  //Llamada a la API
  useEffect(() => {
    callToApi(searchName).then((response) => {
      setTVresults(response);
    });
  }, [searchName]);

  //Eventos

  const handleSearch = (ev) => {
    setSearchName(ev.target.value);
  };

  const renderFilms = () => {
    return films.map((results, id) => {
      return <li key={id}>Nombre: {results.name}</li>; //no me deja poner el score también
    });
  };

  //Renderización
  return (
    <div className="App">
      <h1>Buscador de series con React</h1>
      <form>
        <label htmlFor="name">Nombre de la película:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={searchName}
          onChange={handleSearch}
        />
      </form>
      <h2>Películas que contienen: {searchName}</h2>
      <ul>{renderFilms()}</ul>
    </div>
  );
}

export default App;

//no funciona, dice que "films no está definido" y que "TVresults" no se usa
//a ver qué explican en la clase, que no sé qué leches estoy haciendo...
