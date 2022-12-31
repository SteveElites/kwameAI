import { useEffect, useState } from "react";
import AddNote from "./AddNote"
import Note from "./Note";
// import Note from "./Note"

// import EditNote from "./EditNote"

const NoteList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
  
  const [list, setlist] = useState([]);
  const getNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const jsonData = await response.json();

      setlist(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(()=> {
    getNotes();
  }, []);

  // console.log(list)
  return (
    <div className="notes-list">  
        {/* {notes.map((note)=> 
            <Note id={note.id} title={note.title} text={note.text} 
                date= {note.date}
                note={note}
                notes = {notes}
                handleDeleteNote= {handleDeleteNote}
                onEdit={handleEditNote}
                
                />  
        )} */}
        {list.map((note) => (
        <Note key={note.id}
          id={note.id} title={note.title} text={note.text} 
          date= {note.date}
                note={note}
                list={list}
                notes = {notes}
                handleDeleteNote= {handleDeleteNote}
                onEdit={handleEditNote}
        /> 
        )
          
        
        )}
        <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NoteList
