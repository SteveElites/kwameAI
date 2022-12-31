import React, { useState, useEffect } from 'react';

const Note = ({ note, notes, list, onEdit, handleDeleteNote }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [titleError, setTitleError] = useState(null);
//   const updatedDate = ""
//   const [notes, SetNotes] = useState([]);






  const handleEditClick = () => {
    // Check if the new title is already being used by another note
    // const existingNote = notes.find(n => n.title === title);
    // if (existingNote) {
    //   setTitleError('This title is already being used by another note.');
    //   return;
    // }
//   const updatedDate = new Date()
    
    setEditing(true);


  };

  const handleSaveClick = async(e) => {
    e.preventDefault();

    const isTitleUnique = list.every(otherNote => otherNote.title !== title || otherNote.id === note.id);
    if (!isTitleUnique) {
      setTitleError('Title must be unique');
    //   console.log(note.id);
      return;
    }

    try {
      // const body = { id, note_id, title, text, date, updated };
      const response = await fetch(`http://localhost:5000/${note.note_id}`, 
      {
          method: "PUT",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({
            note_id: note.note_id,
            title: title,
            text: text,
            date: note.date,
            updated: updatedDate.toISOString().substring(0, 10)
          })
      })

      window.location.reload(true);
      console.log(response)
    } catch (err) {
      console.error(err.message)
    }

    const updatedNote = { ...note, title, text, updated: Date.now() };
    onEdit(updatedNote);
    setEditing(false);

  };
  
  useEffect(() => {
    if (titleError) {
      // Remove the shake animation from the error message after 2 seconds
      setTimeout(() => {
        setTitleError(null);
      }, 2000);
    }
  }, [titleError]);
  
  const createdDate = new Date(note.date);
  const formattedCreatedDate = createdDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  const updatedDate = new Date();
  const formattedUpdatedDate = updatedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  




  return (
    <div className="note">
      {editing ? (
        <>  
            {/* <form onSubmit={saveNote}> */}
            <textarea rows="1" cols="" onChange={event => setTitle(event.target.value)} value={title}></textarea>

         
          <textarea
            rows="8"
            cols="10"
            onChange={event => setText(event.target.value)}
            value={text}
          ></textarea>
          {titleError && <div className="error"> <small >{titleError}</small></div>}
          <div className="note-footer">
            {/* <small>Created: {note.date}</small> */}
            {/* <small>Updated: { updatedDate.toLocaleDateString() } </small> */}
            <small><span>Created: </span> {formattedCreatedDate}</small>
            {note.updated && <small><span>Updated:</span> {formattedUpdatedDate}</small>}


            <button onClick={handleSaveClick} className="save btn">
              Done
            </button>
          </div>
                
            {/* </form> */}
        </>
      ) : (
        <>
            <div className='header'>
                <button className='icon edit' onClick={handleEditClick} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                    </svg>
                </button>
                <button className="icon delete" onClick={ ()=> handleDeleteNote(note.id) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

            </div>
            
          <h3 className="title">{title}</h3>
          <div className="text">{text}</div>
          <hr/>
          <div className="note-footer">
            <small><span>Created:</span>  {formattedCreatedDate}</small>
            {note.updated && <small><span>Updated:</span>  {formattedUpdatedDate}</small>}
             
             </div>

          </>
        )}
      </div>
    );
  };
  
  export default Note
