import "../styles/App.scss";
import { useState } from "react";
import { uuid } from "../services/utils";
import originalTasks from "../data/tasks.json";
//todo esto qué es y de dónde sale? No lo veo en el vídeo T-T

function App() {
  //VARIABLES DE ESTADO

  const [isFormShown, setIsFormShown] = useState(false);
  const [tasks, setTasks] = useState(originalTasks); //qué es esto? No lo veo en el vídeo
  const [newTask, setNewTask] = useState("");

  //VARIABLES AUXILIARES

  let showButtonClass = isFormShown === false ? "" : "hidden";
  let showFormClass = isFormShown === true ? "" : "hidden";

  //FUNCIONES MANEJADORAS

  const handleClick = (ev) => {
    ev.preventDefault(); //¿esto se pone en React? Sí
    setIsFormShown(!isFormShown); //pon el valor contrario al que tiene
    /*if (isFormShown === true) {
      setIsFormShown(false);
    } else {
      setIsFormShown(true);
    }*/
  };

  console.log(uuid()); //pegárselo en el key o algo así (map)

  const handleChangeNewTask = (ev) => {
    setNewTask(ev.currentTarget.value);
  };

  const handleClickSaveNewTask = (ev) => {
    //crear nueva tarea
    const newTaskObj = { task: { newTask }, completed: false };
    const tasksCloned = [...tasks, newTaskObj]; //todo lo que tenía el array tasks + lo nuevo
    setTasks(tasksCloned); //también se puede compactar -> poner lo que hay en tasksCloned dentro de los paréntesis de setTasks

    //limpiar el input
    setNewTask("");

    //ocultar el formulario
    setIsFormShown(false);
  };

  const tasksHTML = tasks.map((oneTask, index) => {
    return (
      <li key={index}>
        {" "}
        <input type="checkbox" checked={oneTask.completed} />
        {oneTask.task}
      </li>
    );
  });

  //RETURN

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">To Do List</h1>
      </header>
      <main className="main">
        <ul className="main__list">{tasksHTML} </ul>
        <button
          className={"main__button " + { showButtonClass }}
          onClick={handleClick}
        >
          Nueva tarea
        </button>
        <form className={`main__form ${showFormClass}`} action="">
          <h2 className="form__title">Añade una nueva tarea</h2>
          <label htmlFor="newText" className="form__label">
            Describe tu tarea:
          </label>

          <input
            className="form__input-text"
            placeholder="Descripción"
            type="text"
            name="newText"
            id="newText"
            onChange={handleChangeNewTask}
            value={newTask}
          />

          <input
            className="form__btn"
            type="button"
            value="Guardar"
            onClick={handleClickSaveNewTask}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
