const express = require('express');
const app = express();
const mongoose = require('mongoose');
dotenv = require('dotenv')

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')

dotenv.config();


//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECT).
    then(console.log('Connnected to DB!')).
    catch((e) => {
        console.log(e)
    });


//Midldleware
app.use(express.json())

//Routes Middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)

//Listener
app.listen(3000, console.log('Server is Up and Running'))