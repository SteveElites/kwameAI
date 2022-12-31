import {nanoid} from "nanoid" 
import { useState, useEffect } from "react";



const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const [titleError, setTitleError] = useState(null);
    const [textError, setTextError] = useState(null);
    




    const handleChange = (event) => {
        setNoteText(event.target.value)
    }
    const handletitle = (event) => {
        setNoteTitle(event.target.value)
    }
    const handleSaveClick = (e) => {

        if ( noteTitle.trim().length === 0){
            
            setTitleError('Title is required');

            
        } else if (noteText.trim().length === 0){
            
            setTextError('Note is required');

            
            
        } else {
            // var error = "No note text"
            // document.getElementById('error-message').append(error)
            const date = new Date();
            const note_id = nanoid();
            handleAddNote({noteTitle, noteText});
            saveNote(e, note_id, noteTitle, noteText, date );
            setNoteText('');
            setNoteTitle('');
            
        }
        
    }
    useEffect(() => {
        if (titleError) {
          // Remove the shake animation from the error message after 2 seconds
          setTimeout(() => {
            setTitleError(null);
          }, 2000);
        }
      }, [titleError]);

    useEffect(() => {
        if (textError) {
          // Remove the shake animation from the error message after 2 seconds
          setTimeout(() => {
            setTextError(null);
          }, 2000);
        }
      }, [textError]);

    // const body = {noteTitle, noteText };



       // SAVE TO DATABASE 
    const saveNote = async (e, note_id, noteTitle, noteText, date) => {
        const created = date.toISOString().substring(0, 10);
        e.preventDefault();

        const response = await fetch("http://localhost:5000");
        const existingNotes = await response.json();

        const isTitleUnique = !existingNotes.find(note => note.title === noteTitle);
        if (!isTitleUnique) {
        // Display an error message if the title is not unique
            alert("title must be unique")
        } else {


            try {
            // console.log(noteText, noteTitle);
            const response = await fetch("http://localhost:5000", 
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({
                      note_id: note_id,
                      title: noteTitle,
                      text: noteText,
                      date: created,

                    })
                }
            
            );
            
            // console.log("noteText:  " ,noteText)
            console.log(response);
            window.location.reload(true);
            // console.log("successful")
        } catch (err) {
            console.error(err.message)
        }
        }
        


        
    }


  return (
    <div className="note new" >
       
            <textarea rows="1" cols="" onChange={handletitle} placeholder="title goes here" value={noteTitle}></textarea>
        {titleError && <div className="error"> <small >{titleError}</small></div>}

        <textarea rows="5" cols="" onChange={handleChange} placeholder="add your text here ..." value={noteText} ></textarea>
        {textError && <div className="error"> <small >{textError}</small></div>}

        {/* <div id="error-message">
            
        </div> */}

        <div className="note-footer">
            <small></small>
            <button className="btn" type="submit" onClick={handleSaveClick} >Save</button>
        </div>
        
    </div>
    
      
  )
}

export default AddNote
