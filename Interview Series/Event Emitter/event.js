const event = require('events');
const eventEmitter = new event.EventEmitter();

function connectHandler() {

    console.log("Connection successful");
}

eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_received", () => {
    console.log("Data received successfully.");
})

eventEmitter.emit("connection");
eventEmitter.emit("data_received");