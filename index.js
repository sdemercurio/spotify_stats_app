const express = require('express');

const app = express();

//Route to home page
app.get('/', (req, res) => {
    const data = {
        name: 'Hello',
        isAwesome: true
    };

    res.json(data);
});

app.get('/awesome-generator', (req, res) => {
    const { name, isAwesome } = req.query;
    res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' :
    'not'} awesome`);
})

const port = 8000;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});