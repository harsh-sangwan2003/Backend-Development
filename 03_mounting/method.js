const express = require('express');
const app = express();
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

app.listen(3000);