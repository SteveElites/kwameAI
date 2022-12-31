import { useState } from 'react'

const AddNote = ({ handleAddNote , handleAddTitle }) => {
    const [noteText, SetnoteText] = useState('');
    const [title, SetTitle] = useState('');
    
    
    const handleChange = (event) => {
        SetnoteText(event.target.value);
    }
    const handleTitle = (event) => {
        SetTitle(event.target.value);
    }

    const handleSaveClick = (e) => {
        e.preventDefault();

        if (noteText.trim().length > 0){
            handleAddNote(noteText);
            handleAddTitle(title);
            SetnoteText('');
            // handleAddTitle(title);
            SetTitle('');
        }
        
    }

  return (
    <div className="note new">
        <div className='title' >
            <input type="text" value={title} onChange={handleTitle} />
        </div> 


      <textarea rows="8" cols="10" onChange={handleChange}
      placeholder="Input your text here" 
      value={noteText}></textarea>
        <div className="note-footer">
            <small>Created: -- </small>
            <button onClick={handleSaveClick} className="save btn">Save</button>    
        </div>

    </div>
  )
}

export default AddNote
