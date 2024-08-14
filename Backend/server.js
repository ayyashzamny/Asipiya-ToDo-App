const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    return res.json("Hello World");
})

// Routes
app.use('/api/todo', require('./routes/todoRoute'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
