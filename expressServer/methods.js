const express = require('express');

const app = express();

app.listen(3000);

// middleware
app.use(express.json());

let users = [
    {
        "id": 1,
        "name": "Abhishek"
    },
    {
        "id": 2,
        "name": "Jasbir"
    },
    {
        "id": 3,
        "name": "Kartik"
    }
];

// queries
app.get("/user",(req,res)=>{

    console.log(req.query);
    res.send(users);
})

// params
app.get("/user/:username", (req, res) => {

    console.log(req.params.username);
    res.send("Username recieved successfully.");
})