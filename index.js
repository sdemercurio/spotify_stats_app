const express = require('express');

const app = express();

//Route to home page
app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = 8888;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});