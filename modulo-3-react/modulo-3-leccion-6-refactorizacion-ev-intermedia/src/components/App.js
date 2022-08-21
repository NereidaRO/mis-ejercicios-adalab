import "../styles/App.scss";
import { useEffect, useState } from "react";
//import ls from "../services/localStorage";
import quotesData from "../services/data.json";

function App() {
  //Variables de estado
  const [quotes, setQuotes] = useState(quotesData); //si pongo [quotesData] estoy metiendo un array dentro de un array
  const [addCharacter, setAddCharacter] = useState("");
  const [addQuote, setAddQuote] = useState("");
  const [filterQuote, setFilterQuote] = useState("");
  const [filterCharacter, setFilterCharacter] = useState("");

  //Eventos
  const handleClick = (ev) => {
    ev.preventDefault();
    setQuotes([...quotes, { quote: addQuote, character: addCharacter }]); //para que sea como data.json
  };

  const handleQuote = (ev) => {
    setAddQuote(ev.target.value);
  };

  const handleCharacter = (ev) => {
    setAddCharacter(ev.target.value);
  };

  const handleFilterQuote = (ev) => {
    setFilterQuote(ev.target.value); //hasta aquí debe quedar la handle, el filtro va en la de render
  };

  const handleFilterCharacter = (ev) => {
    setFilterCharacter(ev.target.value); //hasta aquí debe quedar la handle, el filtro va en la de render
  };

  //Renderizado
  const html = quotes
    .filter((oneQuote) => {
      return oneQuote.quote.toLowerCase().includes(filterQuote.toLowerCase());
    })
    .filter((oneQuote) => {
      if (filterCharacter === "all" || filterCharacter === "") {
        return true;
      }
      return oneQuote.character === filterCharacter;
    })
    .map((oneQuote, index) => {
      return (
        <li key={index}>
          {oneQuote.quote} - {oneQuote.character}
        </li>
      );
    });

  //Página
  return (
    <div className="App">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <form>
          <label htmlFor="quote">Filtrar por frase:</label>
          <input
            type="text"
            name="quote"
            id="quote"
            onChange={handleFilterQuote}
            value={filterQuote}
          ></input>
          <label htmlFor="character">Filtrar por personaje:</label>
          <select
            name="character"
            id="character"
            onChange={handleFilterCharacter}
          >
            <option value="all">Todos</option>
            <option value="Ross">Ross</option>
            <option value="Rachel">Rachel</option>
            <option value="Chandler">Chandler</option>
            <option value="Monica">Monica</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Joey">Joey</option>
          </select>
        </form>
        <ul>{html}</ul>
        <h2>Añadir una nueva frase:</h2>
        <form>
          <label htmlFor="newQuote">Frase:</label>
          <input
            type="text"
            name="newQuote"
            id="newQuote"
            onChange={handleQuote}
            value={addQuote}
          ></input>
          <label htmlFor="newCharacter">Personaje:</label>
          <input
            type="text"
            name="newCharacter"
            id="newCharacter"
            onChange={handleCharacter}
            value={addCharacter}
          ></input>
          <button onClick={handleClick}>Añadir</button>
        </form>
      </main>
    </div>
  );
}

export default App;
