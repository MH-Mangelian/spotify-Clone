const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: "de220959825a4d8eae8c664e27e25369",
        clientSecret: "454f13715d86437f8e7163fa37e2ba44"
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(()=>{
        res.status(400).json({
            error: "Invalid code"
        })
    });
})