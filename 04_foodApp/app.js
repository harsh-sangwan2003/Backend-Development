const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

let users = [
    {
        'id': 1,
        'name': 'Abhishek'
    },
    {
        'id': 2,
        'name': 'Jasbir'
    },
    {
        'id': 1,
        'name': 'Kartik'
    },
];

const userRouter = express.Router();
const authRouter = express.Router();

app.use("/user", userRouter);
app.use("/auth", authRouter);

userRouter
    .route("/")
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)

userRouter
    .route("/:id")
    .get(getUserById)

authRouter
    .route("/signup")
    .get(getSignUp)
    .post(postSignUp)

// params

function getUser(req, res) {

    res.send(users);
}

function postUser(req, res) {

    // console.log(req.body);

    users = req.body;
    res.json({

        message: "Data received successfully",
        user: req.body
    })
}

function updateUser(req, res) {

    console.log('req body -> ', req.body);
    let dataTobeUpdated = req.body;

    for (let key in dataTobeUpdated)
        users[key] = dataTobeUpdated[key];

    res.json({

        message: "Data updated successfully"
    })
}

function deleteUser(req, res) {

    users = {};
    res.json({

        message: "Data has been deleted"
    })
}

function getUserById(req, res) {

    console.log(req.params.id);
    res.send("User id recieved");
}

function getSignUp(req, res) {

    res.sendFile('./public/index.html', { root: __dirname });
}

function postSignUp(req, res) {

    let obj = req.body;
    res.json({

        message: "user signed up",
        data: obj
    })
}


const db_link = 'mongodb+srv://admin:Samay229@cluster0.wyeqifu.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db_link)
    .then(function (db) {

        console.log(db);
        console.log('db connected');
    })
    .catch(err => {

        console.log("error is: ", err);
    })

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min:8
    }, confirmPassword: {
        type: String,
        required: true,
        min:8
    },
})

// model
const userModel = mongoose.model('userModel',userSchema);
(async function createUser(){

    let user = {

        name:"Harsh",
        email:"abc@gmail.com",
        password:'12345678',
        confirmPassword:'12345678'
    };

    let data = await userModel.create(user);
    console.log(data);

})();

app.listen(3000);