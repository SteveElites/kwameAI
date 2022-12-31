import { useState } from "react"
import NoteList from "./components/NoteList"
import {nanoid} from "nanoid" 

const App = () => {

  // CREATE AN ARRAY TO SAVE NOTES USING USESTATE
  const [notes, SetNotes] = useState([]);
  

  // CREATES A NEW NOTES :: title is made to store both title and text
  const AddNote = (title) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title.noteTitle,
      text: title.noteText,
      date: date.toLocaleDateString(),
    
    }
    console.log(newNote)
    
  }

  // DELETES A NOTE FROM DATABASE AND RELOADS

  const deleteNote = async (id) => {
    try {
      const deleteNote= await fetch(`http://localhost:5000/${id}`, {
        method:"DELETE"
      })

      console.log(deleteNote);
      window.location.reload(true);
    } catch (err) {
      console.log(err.message)
    }

  }




  const handleEditNote = (updatedNote) => {
    const newNotes = notes.filter(note => note.id !== updatedNote.id);
    // Add the new version of the note to the array
    SetNotes([...newNotes, updatedNote]);
  };





  return (
    <div className="container">
      <h2 className="main-head"> <span>Simple & Quick</span> React Web App</h2>
      <NoteList notes={notes} 
      handleAddNote={AddNote}
      handleDeleteNote={deleteNote}
      handleEditNote = {handleEditNote}
       />

      <small className="main-footer">&copy; Stephen Asiedu Maranatha ( <a target="_blank" rel="noopener noreferrer" href="https://steveelites.github.io">See Portfolio</a> ), December 2022</small>
    </div>
  )
}

export default App
