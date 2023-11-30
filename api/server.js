const express = require('express');
const connectDB = require('./db.js');
const routes = require('./routes/index.js');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes)

const port = 3000;


connectDB('mongodb://127.0.0.1:27017/todo-db')
.then(() => {
    console.log('Database Connected');
    app.listen(port, () => {
        console.log(`I am listening at port ${port}`);
    })
})
.catch((e) => {
    console.log(e);
})
