import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value)
    }
    const handletitle = (event) => {
        setNoteTitle(event.target.value)
    }
    const handleSaveClick = () => {
        if (noteText.trim().length > 0 && noteTitle.trim().length > 0){
            handleAddNote({noteTitle, noteText});
            setNoteText('');
            setNoteTitle('');
            
            
        } else {
            // var error = "No note text"
            // document.getElementById('error-message').append(error)
            alert('Note text and or Title can not be empty')
            
        }
        
    }

  return (
    <div className="note" >
      <textarea rows="1" cols="" onChange={handletitle} placeholder="title goes here" value={noteTitle}></textarea>
      <textarea rows="5" cols="" onChange={handleChange} placeholder="add your text here ..." value={noteText} ></textarea>
      {/* <div id="error-message">
        
      </div> */}

      <div className="note-footer">
        <small>--/--/--</small>
        <button className="btn" onClick={handleSaveClick} >Save</button>
      </div>
    </div>
  )
}

export default AddNote
