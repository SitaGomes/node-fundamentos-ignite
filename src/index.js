import express from "express";

const app = express();

app.get('/', (req, res) => {
    return res.json({
        greetings: 'Bonjour Monde!'
    });
})

const PORT = 3333
app.listen(PORT)