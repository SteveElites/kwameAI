import React, { useState } from 'react';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');

  const handleAddNote = text => {
    setNotes([...notes, { id: Date.now(), text, title: "note" }]);
    setText('');
  };

  const handleAddTitle = title => {
    setNotes([...notes, { id: Date.now(), text, title}]);
  };

  const handleEditNote = updatedNote => {
    // Remove the old version of the note from the array
    const newNotes = notes.filter(note => note.id !== updatedNote.id);
    // Add the new version of the note to the array
    setNotes([...newNotes, updatedNote]);
  };

  return (
    <div>
      <NoteList notes={notes} onEdit={handleEditNote} />
      <AddNote handleAddNote={handleAddNote} handleAddTitle={handleAddTitle} />
    </div>
  );
};

export default App;
