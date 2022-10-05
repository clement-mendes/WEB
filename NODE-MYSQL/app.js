const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    host: localhost,
    user: 'Root',
    password: '',
    database: ''
});

db.connect( (error) =>{
    if(error) {
        console.log(error)
    }else{
        console.log("MYSQL connected..")
    }
})

app.get("/", (req,res) => {
    res.send("<h1>Home page</h1>")
})

app.listen(5001, () => {
    console.log("server started on port 5001");
})