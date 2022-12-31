# kwameAI
1. To start the server, you will need a db.js file which should like this 

<!-- this file was deliberately ignored because it has private details -->
<!-- db.js -->

const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "database_pswd",
    host: "localhost",
    port: 5432,
    database: "notes_app"

});

module.exports = pool;



