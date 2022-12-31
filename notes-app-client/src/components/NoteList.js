import AddNote from "./AddNote"
import Note from "./Note"
// import EditNote from "./EditNote"

const NoteList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="notes-list">
        {notes.map((note)=> 
            <Note id={note.id} title={note.title} text={note.text} 
                date= {note.date}
                note={note}
                handleDeleteNote= {handleDeleteNote}
                onEdit={handleEditNote}
                
                /> 
        )}
        {/* {notes.map(note => (
        <EditNote id={note.id} note={note} onEdit={handleEditNote} />
      ))} */}
        <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NoteList
