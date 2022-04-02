const express = require('express')
const app = express()
const pool = require('./database/db')

app.use(express.json()) 



//ROUTES
// get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo')
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

//get a todo

//create a todo
app.post('/todos/add', async (req, res) => {
    try {
        const { description } = req.body;

        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", 
        [description]
        );

        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(err.message)
    }
})

//update a todo

//delete a todo



app.listen(5000, () => {
    console.log("Server is running on port 5000")
})