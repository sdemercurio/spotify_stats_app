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

/**
 * Generates a random string containing letters and numbers
 * @param {number} length The lengthof the string
 * @return {string} The generated string
 */
const generateRandomString = length => {
    let text = '';
    const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

app.get('/login', (req, res) => {
    const queryParams = querystring.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_url: REDIRECT_URI,
    })
    // hit login route authorize endpoint and redirect to Spotify
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});





app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});