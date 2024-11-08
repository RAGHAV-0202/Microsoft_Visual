import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import dotenv from "dotenv";
dotenv.config();

const app = express();

const oauth2Client = new OAuth2Client({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'http://localhost:3000/oauth2callback'
});

app.get('/auth', (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://outlook.office.com/mail.send']
    });
    res.redirect(authUrl);
});

app.get('/oauth2callback', async (req, res) => {
    const { code } = req.query;
    try {
        const { tokens } = await oauth2Client.getToken(code);
        console.log('Refresh Token:', tokens.refresh_token);
        res.send('Success! Check your console for the refresh token.');
    } catch (error) {
        console.error('Error getting tokens:', error);
        res.send('Error getting tokens');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});