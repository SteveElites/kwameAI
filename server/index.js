
const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");



//middleware
app.use(cors());
app.use(express.json());


//ROUTES
// Create a Note
app.post("", async(req, res) => {
    try {
        // const id_key = nanoid();
        const { note_id, title, text, date, updated } = req.body;
        
        const newNote = await pool.query( 
            "INSERT INTO notes (note_id, title, text, date, updated) VALUES($1,$2, $3, $4, $5) RETURNING * ", 
            [note_id, title, text, date, updated] );

            // console.log(req.body)
            res.json(newNote.rows[0]);
    } catch (err) {
        console.error(err.message);

    }
})


//Get all Notes
app.get("", async(req, res) => {
    try {
        const allNotes = await pool.query("SELECT * FROM notes");

        res.json(allNotes.rows);
    } catch (err) {
        console.error(err.message);

    }
})


// Update a Note
app.put("/:id_number", async(req, res) => {
    try {
        const { id_number } = req.params;
        const { note_id, title, text, date, updated } = req.body;
        const updateNote = await pool.query(
            "UPDATE notes SET note_id = $1, title = $2, text = $3, date = $4, updated = $5 WHERE note_id = $6",
            [note_id, title, text, date, updated, id_number]
            );

        res.json("Note has been updated");

    } catch (err) {
        console.error(err.message);

    }
})

// Delete a Note
app.delete("/:id_number", async(req, res) => {
    try {
        const { id_number } = req.params;
        const deleteNote = await pool.query(
            "DELETE FROM notes WHERE id = $1",[id_number]
            );

        res.json("Note has been deleted");

    } catch (err) {
        console.error(err.message);

    }
})


  

app.listen(5000,() => {
    console.log("Hi there, Server is up and Runing");
    
})