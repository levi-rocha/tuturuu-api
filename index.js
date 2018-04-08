const jsonOnlyMiddleware = require("./middleware/json-only");
const express = require("express");
const bfc = require("bfcounter");

const TUTURUU = '/tuturuu';

var counter = '99999999999999999999999999999999999999999999999999999999999999';

const logCounter = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Tuturuu: ${counter}`);
};

var app = express();

app.use(jsonOnlyMiddleware.jsonOnly);
app.use(express.json());

app.get('/', function (req, res) {
    res.status(404);
    res.send('Not a resource.\n');
});

app.get(TUTURUU, function (req, res) {
    res.status(200).header("Content-Type", "application/json");
    res.send({count: counter});
});

app.post(TUTURUU, function (req, res) {
    counter = bfc.increment(counter);
    logCounter();
    res.status(200).header("Content-Type", "application/json");
    res.send({count: counter});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`tuturuu-api: server listening on port ${PORT}`);
logCounter();