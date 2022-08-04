import '../styles/App.scss';
import {useState} from 'react';
import { uuid } from '../services/utils';
import originalTasks from '../data/tasks.json';
//todo esto qué es y de dónde sale? No lo veo en el vídeo T-T

function App() {

  //VARIABLES DE ESTADO

  const [isFormShown, setIsFormShown] = useState(false); //no empieza con el formulario oculto!
  const [tasks, setTasks] = useState(tasksWithIds); //qué es esto? No lo veo en el vídeo
  const [newTask, setNewTask] = useState('');

  //VARIABLES AUXILIARES

  let showButtonClass = isFormShown === false ? '' : 'hidden' ;
  let showFormClass = isFormShown === true ? '' : 'hidden' ;

  //FUNCIONES MANEJADORAS

  const handleClick = (ev) => {
    ev.preventDefault(); //¿esto se pone en React?
    //setIsFormShown( !isFormShown ); //pon el valor contrario al que tiene, pero no va
    if(isFormShown === true) {
      setIsFormShown(false);
    } else {
      setIsFormShown(true);
    } //¡tampoco va con la forma mala!
  };

  const handleTaskData = (ev) => {
    const taskData = tasks[ev.currentTarget.id]; //vale, ¿pero esto para qué sirve? El vídeo corta esto
  };

  const handleChangeNewTask = (ev) => {
    setNewTask(ev.currentTarget.value);
  };

  const handleClickSaveNewTask = (ev) => {
    //crear nueva tarea
    const newTaskObj = {task: {newTask}, completed: false}
    const tasksCloned = [...tasks, newTaskObj] //todo lo que tenía el array tasks + lo nuevo
    setTasks(tasksCloned); //también se puede compactar -> poner lo que hay en tasksCloned dentro de los paréntesis de setTasks

    //limpiar el input
    setNewTask('');

    //ocultar el formulario
    setIsFormShown(false);
  };

  //RETURN

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">To Do List</h1>
      </header>
      <main className="main">
        <ul className="main__list">
        {tasksHTML} {/* entiendo para qué sirve pero ¿de dónde sale? ni siquiera hay algo que se llame así*/}
        </ul>
        <button className={"main__button " + {showButtonClass}} onClick ={handleClick}>Nueva tarea</button>
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

          <input className="form__btn" type="button" value="Guardar" onClick={handleClickSaveNewTask} />
        </form>
      </main>
    </div>
  );
}

//última duda: ¿cómo cambia el checked? No lo veo en el código ni en el vídeo

export default App;
