const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: "de220959825a4d8eae8c664e27e25369",
        clientSecret: "454f13715d86437f8e7163fa37e2ba44"
    })

    spotifyApi.refreshAccessToken(refreshToken).then(data => {
        console.log('The access token has been refreshed!');

        spotifyApi.setAccessToken(data.body['access_token']);
    }).catch(err => {
        res.sendStatus(400)
        console.log(err)
    });
});

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: "de220959825a4d8eae8c664e27e25369",
        clientSecret: "454f13715d86437f8e7163fa37e2ba44",
        refreshToken
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err)=>{
        console.log(err)
        res.status(400).json({
            error: "Invalid code"
        })
    });
})

app.listen(3001)