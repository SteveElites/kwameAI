import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onEdit, handleDeleteNote }) => {
  return (
    <div>
      {notes.map(note => (
        <Note key={note.id} note={note} notes={notes} onEdit={onEdit} handleDeleteNote={handleDeleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
