import '../styles/App.scss';
import {useState} from 'react';
import { uuid } from '../services/utils';
import originalTasks from '../data/tasks.json';

function App() {

  const [isFormShown, setIsFormShown] = useState(false); //no empieza con hidden!
  const [tasks, setTasks] = useState(tasksWithIds);
  const [newTask, setNewTask] = useState('');

  let showButtonClass = isFormShown === false ? '' : 'hidden' ;
  let showFormClass = isFormShown === true ? '' : 'hidden' ;

  const handleClick = (ev) => {
    ev.preventDefault(); //¿esto se pone en React?
    //setIsFormShown( !isFormShown ); //pon el valor contrario al que tiene, pero no va
    if(isFormShown === true) {
      setIsFormShown(false);
    } else {
      setIsFormShown(true);
    } //¡tampoco va con la forma mala!
    //el segundo video no está T-T
  };

  //-------------
  //AQUÍ COMIENZA EL COPYPASTE

  const handleClickTask = (ev) => {
    const clickedTaskId = ev.currentTarget.dataset.id;
     // Dos formas de hacerlo:

    // Una forma
    const taskData = tasks.find((eachTaskObj) => eachTaskObj.id === clickedTaskId);

    taskData.completed = !taskData.completed;

    setTasks([...tasks]);
    /*
    // Otra forma:
        const clonedTasks = tasks.map((eachTaskObj) => {
      if (eachTaskObj.id === clickedTaskId) {
        return { ...eachTaskObj, completed: !eachTaskObj.completed };
      } else {
        return eachTaskObj;
      }
    });

    setTasks(clonedTasks);
    */
  };

  const handleChangeNewTask = (ev) => {
    const valueWritten = ev.currentTarget.value;

    setNewTask(valueWritten);
  };

  const handleClickSaveNewTask = (ev) => {
    // 1. Cree una una nueva tarea

    const newTaskObject = { id: uuid(), task: newTask, completed: false };

    // tasks.push( newTaskObject ); --> NOOO CACA!

    const tasksCloned = [...tasks, newTaskObject];

    setTasks(tasksCloned);

    // 2. Borrar el value del input

    setNewTask('');

    // 3. Ocultar el formulario

    setIsFormShown(false);
  };

  const calculateTaskClass = (eachTaskObj) => {
    if (eachTaskObj.completed === true) {
      return 'completed';
    } else {
      return '';
    }
  };

  const tasksHTML = tasks.map((eachTaskObj) => (
    <li key={eachTaskObj.id} className={'task ' + calculateTaskClass(eachTaskObj)}>
      <input
        type="checkbox"
        name={`task-${eachTaskObj.id}`}
        id={`task-${eachTaskObj.id}`}
        data-id={eachTaskObj.id}
        checked={eachTaskObj.completed}
        onChange={handleClickTask}
      />
      <p>{eachTaskObj.task}</p>
    </li>
  ));

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">To Do List</h1>
      </header>
      <main className="main">
        <ul className="main__list">
        {tasksHTML}
        </ul>
        <button className={"main__button " + {showButtonClass}} onClick ={handleClick}>Nueva tarea</button>
        <form className={`form ${showFormClass}`} action="">
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

export default App;
