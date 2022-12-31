import React, { useState } from 'react';

const Note = ({ note, notes, onEdit, handleDeleteNote }) => {
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

  const handleSaveClick = () => {
   
    const isTitleUnique = notes.every(otherNote => otherNote.title !== title);
    if (!isTitleUnique) {
      setTitleError('Title must be unique');
      return;
    }

    // Update the note
    // const updatedNote = { id: note.id, title, text, date: note.date };
    // onEdit(updatedNote);
    // setEditing(false);

    const updatedNote = { ...note, title, text, updated: Date.now() };
    onEdit(updatedNote);
    setEditing(false);

  };
  const createdDate = new Date(note.date);
  const formattedCreatedDate = createdDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  const updatedDate = new Date(note.updated);
  const formattedUpdatedDate = updatedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });



  return (
    <div className="note">
      {editing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <textarea
            rows="8"
            cols="10"
            onChange={event => setText(event.target.value)}
            value={text}
          ></textarea>
          {titleError && <div className="error">{titleError}</div>}
          <div className="note-footer">
            {/* <small>Created: {note.date}</small> */}
            {/* <small>Updated: { updatedDate.toLocaleDateString() } </small> */}
            <small>Created: {formattedCreatedDate}</small>
            {note.updated && <small>Updated: {formattedUpdatedDate}</small>}


            <button onClick={handleSaveClick} className="save btn">
              Save
            </button>
          </div>
        </>
      ) : (
        <>
            <button className='btn' onClick={handleEditClick} >Edit</button>
          <div className="title">{title}</div>
          <div className="text">{text}</div>
          <div className="note-footer">
            <small>Created: {formattedCreatedDate}</small>
            {note.updated && <small>Updated: {formattedUpdatedDate}</small>}
             
            <button className="btn" onClick={ ()=> handleDeleteNote(note.id) }>x</button>
             </div>

          </>
        )}
      </div>
    );
  };
  
  export default Note
