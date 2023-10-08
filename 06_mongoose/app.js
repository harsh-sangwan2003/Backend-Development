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

app.use("/user", userRouter);


userRouter
    .route("/")
    .get(getUser)
    .post(postUser)
    .patch(updateUser)
    .delete(deleteUser)

userRouter
    .route("/:id")
    .get(getUserById)

// params

async function getUser(req, res) {

    // const allUsers = await userModel.find();
    const user = await userModel.findOne({name:"Harsh"});

    res.json({
        message:"All users",
        data:user
    })
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
        min: 8
    }, confirmPassword: {
        type: String,
        required: true,
        min: 8
    },
})

// model
const userModel = mongoose.model('userModel', userSchema);
// (async function createUser() {

//     let user = {

//         name: "Jessy",
//         email: "abcde@gmail.com",
//         password: '12345678',
//         confirmPassword: '12345678'
//     };

//     let data = await userModel.create(user);
//     console.log(data);

// })();

app.listen(3000,()=>{

    console.log("Listening on port 3000.");
});
