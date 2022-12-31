import React, { useState } from 'react';

const Note = ({ note, notes, onEdit, handleDeleteNote }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [titleError, setTitleError] = useState(null);

  const handleEditClick = () => {
    // Check if the new title is already being used by another note
    const existingNote = notes.find(n => n.title === title);
    if (existingNote) {
      setTitleError('This title is already being used by another note.');
      return;
    }
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Check if the new title is already being used by another note
    const existingNote = notes.find(n => n.title === title);
    if (existingNote) {
      setTitleError('This title is already being used by another note.');
      return;
    }

    // Save the edited note to the database
    onEdit({ id: note.id, title, text });
    setEditing(false);
  };

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
            <small>Created: {new Date(note.id).toLocaleString()}</small>
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
             <small>{note.date}</small>
            <button className="btn" onClick={ ()=> handleDeleteNote(note.id) }>x</button>
             </div>

          </>
        )}
      </div>
    );
  };
  
  export default Note