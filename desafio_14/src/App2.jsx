// La siguiente línea de código, importa la hoja de estilos.
import { useState } from "react";
import "./app.scss";

const App = () => {

    const [notes, setNotes] = useState([]);


   

    //Input de nueva nota
    const [inputNewNote, setInputNewNote] = useState ("");
    const [inputNewNoteDesc, setInputNewNoteDesc] = useState ("");

    //Secuencia del ID
    const generateID = () => {
        let maxId = 0;
        
        notes.forEach((note)=> {
            if (note.id > maxId) {
                maxId = note.id;
            }
        });
        return maxId + 1;
    };

    //actualiza los input en tiempo real
    const handleOnChangeNewNote = (e) =>{
        setInputNewNote( e.target.value);

    };

    const handleOnChangeNewNoteDesc = (e) =>{
        setInputNewNoteDesc( e.target.value);

    };

    //agrega la nueva nota al array de notas
    const handleOnClickAddNote = () => {

        //Si se ingresó algun valor en el input
        if (inputNewNote.trim().length > 0) {
            //Crea un nuevo objeto nota con un id nuevo y unico
            const newNote = {
                id: generateID(),
                name: inputNewNote,
                description:inputNewNoteDesc,
                favorite : false};

            //Actualiza el estado de la lista de notas
            setNotes([...notes, newNote]);

            //Resetea el input de " nueva nota"
            setInputNewNote("");

        }
    };

    const handleOnChangeModifyNote = (id, value) => {
        //Busca el índice del elemento que corresponde al id recibido
        const index = notes.findIndex((note)=> note.id === id);

        //Clona la lista de notas
        const cloneNotes = [...notes];

        //Modifica el nombre de la nota en relación al índice del ID
        cloneNotes[index].name = value;

        //Actualiza el estado de la lista de notas
        setNotes(cloneNotes);

    };

    const handleOnClickDeleteNote= (id) => {
        //Busca el índice del elemento que corresponde al id recibido
        const index = notes.findIndex((note) => note.id === id);

        //Crea un nuevo array que no incluye el elemento eliminado
        const currentNotes = notes.toSpliced(index,1);

        //Actualiza el estado de la lista de colores
        setNotes(currentNotes);

    };



    return (
        <>
            <div className="noteForm">
                <p>Nueva nota:</p>
                <div className="noteForm__data">
                    <div className="noteForm__data--input">
                        <label htmlFor="title">Título: </label>
                        <input
                            type="text"
                            id="note"
                            value={inputNewNote}
                            onChange={(e) => handleOnChangeNewNote(e)}  />
                    </div>
                    <div className="noteForm__data--input">
                        <label htmlFor="description">Descripción: </label>
                        <input
                            type="text"
                            id="description"
                            value={inputNewNoteDesc}
                            onChange={(e) => handleOnChangeNewNoteDesc(e)}  />
                    </div>
                </div>
                <button onClick={handleOnClickAddNote}>Agregar Nota</button>
            </div>
            <div className="noteList">
                <ul className="listItem">
                    {notes.map((note) => (
                        <li key={note.id}>
                            <input
                                type="text"
                                value={note.name}
                                onChange={(e) => handleOnChangeModifyNote(note.id, e.target.value)}/>
                            <button onClick={() => handleOnClickDeleteNote(note.id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default App;