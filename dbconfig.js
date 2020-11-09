const mysql = require('mysql')
const conn = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'aviaticket',
    password:'',
})


module.exports = conn