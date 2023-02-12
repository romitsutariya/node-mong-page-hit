const express = require('express');
require('dotenv').config()

const PORT = process.env.PORT || 8000;;
const app = express();
let count=0;

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`page hit count is: ${count++}`);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});