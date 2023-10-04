const express = require('express');
const app = express();
app.use(express.json());

let users = [
    {
        'id':1,
        'name':'Abhishek'
    },
    {
        'id':2,
        'name':'Jasbir'
    },
    {
        'id':1,
        'name':'Kartik'
    },
];

// query
app.get("/user",(req,res)=>{

    console.log(req.query);
    res.send(users);
})

// get
app.get('/user', (req, res) => {

    res.send(users);
})

// post
app.post("/user", (req, res) => {

    // console.log(req.body);

    users = req.body;
    res.json({

        message: "Data received successfully",
        user: req.body
    })
})

// update
app.patch('/user', (req, res) => {

    console.log('req body -> ', req.body);
    let dataTobeUpdated = req.body;

    for (let key in dataTobeUpdated)
        users[key] = dataTobeUpdated[key];

    res.json({

        message: "Data updated successfully"
    })
})

// delete
app.delete('/user',(req,res)=>{

    users = {};
    res.json({

        message:"Data has been deleted"
    })
})

// params
app.get("/user/:id",(req,res)=>{

    console.log(req.params.id);
    res.send("User id recieved");
})

app.listen(3000);