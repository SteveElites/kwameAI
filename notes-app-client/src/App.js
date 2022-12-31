import { useState } from "react"
import NoteList from "./components/NoteList"
import {nanoid} from "nanoid" 
// import EditNote from "./components/EditNote"

const App = () => {
  const [notes, SetNotes] = useState([
    // {
    //   id: nanoid(),
    //   title: "some title",
    //   text: "here is some body",
    //   date: "15/12/2020"
    // },
    // {
    //   id: nanoid(),
    //   title: "titled",
    //   text: "here is some body",
    //   date: "15/12/2020"
    // },
  ]);
  
  const AddNote = (title, text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title.noteTitle,
      text: title.noteText,
      date: date.toLocaleDateString(),
    
    }
    
    const existingNote = notes.find((note) => note.title === title.noteTitle);
    if (existingNote) {
      alert('title must be unique')
    } else {
      const newNotes = [...notes, newNote];
      SetNotes(newNotes);
    // console.log(title.noteText);

    }
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !==id);
    SetNotes(newNotes)
  }


  const handleEditNote = (updatedNote) => {
    const newNotes = notes.filter(note => note.id !== updatedNote.id);
    // Add the new version of the note to the array
    SetNotes([...newNotes, updatedNote]);
  };





  return (
    <div className="container">
      <NoteList notes={notes} 
      handleAddNote={AddNote}
      handleDeleteNote={deleteNote}
      handleEditNote = {handleEditNote}
       />
    </div>
  )
}

export default App
