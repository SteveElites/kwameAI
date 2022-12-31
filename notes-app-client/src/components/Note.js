

// const Note = ({id, title, text, date, handleDeleteNote, onEdit }) => {
//     const handleEditClick = () => {
//         onEdit({id: id, updatedNote: {title: 'New title', text: 'New text'}});
//       };

//   return (
//     <div className="note">
//         <button className="btn" onClick={handleEditClick} >Edit</button>
//         <h3> {title}</h3>
//         <span> {text} </span>
//         <div className="note-footer" >
//             <small>{date}</small>
//             <button className="btn" onClick={ ()=> handleDeleteNote(id) }>x</button>
//         </div>
//   </div>
//   )
// }



// export default Note


import { useState } from "react";

const Note = ({ note, handleDeleteNote }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [text, setText] = useState(note.text);
  
    const handleEditClick = () => {
      setEditing(true);
    };
  
    const handleSaveClick = () => {
      // Save the edited note to the database
      setEditing(false);
    };
  
    const handleTitleChange = event => {
      setTitle(event.target.value);
    };
  
    const handleTextChange = event => {
      setText(event.target.value);
    };
  
    return (
      <div>
        {editing ? (
          <div className="note">
            <input type="text" value={title} onChange={handleTitleChange} />
            <textarea value={text} onChange={handleTextChange} />
            <button className="btn" onClick={handleSaveClick}>Done</button>
          </div>
        ) : (
          <div className="note">
            <h3>{title}</h3>
            <p>{text}</p>
            <button className="btn" onClick={handleEditClick}>Edit</button>
            
         <div className="note-footer" >
             <small>{note.date}</small>
            <button className="btn" onClick={ ()=> handleDeleteNote(note.id) }>x</button>
             </div>

          </div>
        )}
      </div>
    );
  };
  
  export default Note
