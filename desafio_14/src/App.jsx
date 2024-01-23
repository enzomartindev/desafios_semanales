// La siguiente línea de código, importa la hoja de estilos.
import { useState } from "react";
import "./app.scss";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

const App = () => {

    const [notes, setNotes] = useState([]);

    const [favorites, setFavorites] = useState([]);


    const NotesForm = ()=> {

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

                console.log(favorites.includes(newNote.id));

            }

        };


        return(
            <div className="noteForm">
                <p>Nueva nota:</p>
                <div className="noteForm__data">
                    <input className="noteForm__data--input"
                        type="text"
                        id="title"
                        placeholder="Título"
                        value={inputNewNote}
                        onChange={(e) => handleOnChangeNewNote(e)}  />
                    <textarea className="noteForm__data--input"
                        placeholder="Descripción"
                        id="description"
                        value={inputNewNoteDesc}
                        onChange={(e) => handleOnChangeNewNoteDesc(e)}  />
                </div>
                <div className="noteForm--btn">
                    <button onClick={handleOnClickAddNote}>Agregar Nota</button>
                </div>
            </div>
        );
    };

    const NotesList = () => {

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

        const handleOnChangeModifyNoteDesc = (id, value) => {
            //Busca el índice del elemento que corresponde al id recibido
            const index = notes.findIndex((note)=> note.id === id);

            //Clona la lista de notas
            const cloneNotes = [...notes];

            //Modifica el nombre de la nota en relación al índice del ID
            cloneNotes[index].description = value;

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

        const handleOnClickFavorite= (id) => {

            const index = notes.findIndex((note) => note.id === id);

            // Clona la lista de notas favoritas
            const cloneFavorites = [...favorites];

            // Si la nota ya está marcada como favorita, la elimina de la lista de favoritos
            if (favorites.includes(id)) {
                cloneFavorites.splice(cloneFavorites.indexOf(id), 1);
            } else {
                // Sino, la agrega a la lista de favoritos
                cloneFavorites.push(id);
            }

            // Actualiza el estado de la lista de favoritos
            setFavorites(cloneFavorites);

            // Actualiza el estado de la nota original
            const cloneNotes = [...notes];
            cloneNotes[index].favorite = !cloneNotes[index].favorite;
            setNotes(cloneNotes);

            console.log(cloneNotes[index].favorite);

        };


        return(
            <ul className={`${notes.length > 0 ? "noteList": ""}`}>
                {notes.map((note) => (
                    <li key={note.id} className="listItem">
                        <input
                            className="listItem--noteName"
                            type="text"
                            value={note.name}
                            onChange={(e) => handleOnChangeModifyNote(note.id, e.target.value)}/>
                        <textarea
                            className="listItem--noteDesc"
                            value={note.description}
                            onChange={(e) => handleOnChangeModifyNoteDesc(note.id, e.target.value)}/>
                        <div className="listItem--buttons">
                            <div className="tooltip">
                                <span className="tooltiptext">Eliminar nota</span>
                                <button className="btn"
                                    onClick={() => handleOnClickDeleteNote(note.id)}>❌</button>
                            </div>
                            <div className="tooltip">
                                <span className={`tooltiptext ${favorites.includes(note.id) ? "tooltipDelete" : "tooltipAdd"}`}></span>
                                <button className={`btn ${favorites.includes(note.id) ? "btnFav" : "btnNotFav"}`}
                                    onClick={() => handleOnClickFavorite(note.id)}>⭐</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        );

    };

    return (
        <>
            <Header title="Desafío semanal 14" subtitle="Lista de notas" />
            <Main>
                <NotesForm></NotesForm>
                <NotesList></NotesList>
            </Main>
            <Footer/>
        </>
    );
};

export default App;