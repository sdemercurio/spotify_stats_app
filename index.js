require('dotenv').config();
const express = require('express');
const querystring = require('querystring');
const app = express();
const port = 8888;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

//Route to home page
app.get('/', (req, res) => {
    const data = {
        name: 'Hello',
        isAwesome: true
    };

    res.json(data);
});

app.get('/login', (req, res) => {
    const queryParams = querystring.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_url: REDIRECT_URI,
    })
    // hit login route authorize endpoint and redirect to Spotify
    res.redirect(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`);
});





app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});