const express = require('express')
const mongoose = require('mongoose')
const mongodb =require('mongodb')
const mysql= require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan =require('morgan') 



//const conn = require('./dbconfig');
const authRoutes = require('./routers/auth')
const ticket2Routes = require('./routers/ticket2')
const ticketRoutes = require('./routers/ticket')
const airportRoutes = require('./routers/airport')
const polsovatelRoutes = require('./routers/polsovatel')
const testRoutes = require('./routers/test')

const { use } = require('./routers/auth')
const app = express()
mongoose.connect('mongodb+srv://chwydu:qwerty1234@cluster0.vkvgh.mongodb.net/chwyduDB?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then (()=> console.log('mongoDB'))
.catch(error=>console.log(error))



app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())





app.use('/api/auth',authRoutes)
app.use('/api/ticket',ticketRoutes)
app.use('/api/airport',airportRoutes)
app.use('/api/polsovatel',polsovatelRoutes)
app.use('/api/test',testRoutes)
app.use('/api/ticket2',ticket2Routes)


module.exports = app