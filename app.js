const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const {engine} = require('express-handlebars')


// Load config 
dotenv.config({path: './config/config.env'})

//Database connection
connectDB()

const app = express()


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Static folder
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/index'))
//Handlebars config
app.engine('.hbs', engine({defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine', '.hbs');

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))


app.listen()