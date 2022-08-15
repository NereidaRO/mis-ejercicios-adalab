import "../styles/App.scss";
import { useEffect, useState } from "react";
import ls from "../services/localStorage";

function App() {
  //Variables de estado

  const [animal, setAnimal] = useState(""); //value del input
  const [animalLS, setAnimalLS] = useState(ls.get("animal", "")); //nombre del LS

  //Cargar el LS

  useEffect(() => {
    ls.set("animal", animalLS);
  }, [animal]);

  //Eventos

  const handleClick = (ev) => {
    ev.preventDefault();
    setAnimal({ animal });
    setAnimalLS([...{ animal }]);
  };

  return (
    <div className="App">
      <h1>Ejemplo simplón para ver si sé usar el Local Storage con React</h1>
      <form>
        <label htmlFor="animal">Escribe un animal en minúsculas:</label>
        <input
          type="text"
          id="animal"
          name="animal"
          placeholder="ornitorrinco"
          value={animal}
        ></input>
        <input type="button" onClick={handleClick}>
          Subir al LS
        </input>
      </form>
      <p>
        Para ver lo guadado, recarga la página, que esto es un ejemplo cutre de
        domingo por la tarde...
      </p>
    </div>
  );
}

export default App;
//por supuesto, no va... ni siquiera carga la página; a ver qué dicen en clase
