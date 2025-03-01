import express from 'express';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import db from './db/conn.mjs';
// import Learner from './models/learners.mjs';

// import users from ...
//      for /api/user
// import messages from ...
//      for /api/

const PORT = process.env.PORT || 5052;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("This is the request-ticket api.  This page will need to be filled in with information")
})

// app.use('/api/users', users);
// app.use('/api/request-ticket', messages);

app.get('/*', (req, res) => {
    res.redirect('/');
})

// Global error handling after the routes
app.use((err, _req, res, next) => {
    res.status(500).send('seems like we messed up somewhere')
})

// start express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})