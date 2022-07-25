import '../styles/App.scss';
import fairy from '../images/pexels-david-gonzales.jpg';

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <img
        src={fairy}
        title="hada"
        alt="hada"
      />
      { /* comentario para una o varias líneas */}
    </div>
  );
}

export default App;
