import {useState } from "react";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import "./app.scss";


const App = () => {

    //Lista de tareas a mostrar
    const [tasks, setTasks] = useState([]);

    const TaskForm = () => {

        //Input Nueva tarea
        const [inputNewTask , setinputNewTask] = useState("");

        //Secuencia del ID
        const generateID = () => {
            let maxId = 0;

            tasks.forEach((task)=> {
                if (task.id > maxId) {
                    maxId = task.id;
                }
            });
            return maxId + 1;
        };

        const handleOnChangeNewTask = (e) => {
            setinputNewTask(e.target.value);
        };

        const handleOnClickAddTask = () => {


            //Si se ingresó algun valor en el input
            if (inputNewTask.trim().length > 0) {
            //Crea un nuevo objeto tarea con un id nuevo y unico
                const newTask = {id: generateID(), name: inputNewTask};

                //Actualiza el estado de la lista de tareas
                setTasks([...tasks, newTask]);

                //Resetea el input de " nueva tarea"
                setinputNewTask("");

            }


        };

        return(
            <div className="taskForce">
                <label htmlFor="task">Nueva Tarea: </label>
                <input
                    type="text"
                    id="task"
                    value={inputNewTask}
                    onChange={(e) => handleOnChangeNewTask(e)}  />
                <button onClick={handleOnClickAddTask}>Agregar tarea</button>
            </div>
        );
    };

    const TaskList = () => {

        const handleOnChangeModifyTask = (id, value) => {
        //Busca el índice del elemento que corresponde al id recibido
            const index = tasks.findIndex((task)=> task.id === id);

            //Clona la lista de tareas
            const cloneTasks = [...tasks];

            //Modifica el nombre de la tarea en relación al índice del ID
            cloneTasks[index].name = value;

            //Actualiza el estado de la lista de tareas
            setTasks(cloneTasks);

        };

        const handleOnClickDeleteTask = (id) => {
        //Busca el índice del elemento que corresponde al id recibido
            const index = tasks.findIndex((task) => task.id === id);

            //Crea un nuevo array que no incluye el elemento eliminado
            const currentTasks = tasks.toSpliced(index,1);

            //Actualiza el estado de la lista de colores
            setTasks(currentTasks);

        };

        return(
            <div className="taskList">
                <ul className="listItem">
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <input
                                type="text"
                                value={task.name}
                                onChange={(e) => handleOnChangeModifyTask(task.id, e.target.value)}/>
                            <button onClick={() => handleOnClickDeleteTask(task.id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        );

    };

    return (
        <>
            <Header title="Desafío semanal 13" subtitle="Lista de tareas" />
            <Main>
                <TaskForm/>
                <TaskList/>
            </Main>
            <Footer />
        </>
    );
};

export default App;