const express = require("express");
const router = require('./router/auth')
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors")
const bodyParser = require("body-parser");
const port = 5000;

dotenv.config({path:'./config.env'});

require('./db/conn');

app.use(cors());
app.use(bodyParser.json())
app.use(cookieParser())

//const User = require("./model/userSchema"); // --> This is importing method of userSchema//

app.use(express.json());

//we link the router files to make our route easy
app.use(router);

//Middelware

const middleware=(req, res, next)=>{
    console.log('Hello my middlware') //it is use to keep process pending until verified by database, ex-login//
    next();
}


app.get('/', (req, res)=>{
    res.send('Hello World from the server app js')
});

// app.get('/about', middleware, (req, res)=>{
//     res.send('Hello About from the server')
// });

app.get('/contact', (req, res)=>{
    res.cookie("Test", "katta");
    res.cookie("Dala", "lama")
    res.send('Hello contact from the server');
});

app.get('/signin', (req, res)=>{
    res.send('Hello signin from the server')
});

app.get('/signup', (req, res)=>{
    res.send('Hello signup from the server')
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})