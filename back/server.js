const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const e = require("express");

const app = express()
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "signup"
})

app.post('/app', (req,res) => {
    const sql = "Insert into otpdata (`ph`,`dataotp`) values(?)";
    const values = [
        req.body.ph,
        req.body.dataotp
    ]
    console.log(req.body.ph);
    console.log(req.body.dataotp);
    db.query(sql,[values],(err,data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req,res) => {
    const sql = "select * from login where `email` = ? and `password`=?";
    db.query(sql,[req.body.email,req.body.password],(err,data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        } else{
            return res.json("Failed");
        }
        
    })
})


app.listen(8081, ()=> {
    console.log("Listening");
})