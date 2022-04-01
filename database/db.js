const Pool = require('pg').Pool;

const Pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo_db',
    password: '021201',
    port: 5432
})

module.exports = pool;