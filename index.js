var app = require('express')();

const TUTURUU = '/tuturuu';

var tempCounter = 0;

const logCounter = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Tuturuu: ${tempCounter}`);
};

app.get('/', function (req, res) {
    res.status(404);
    res.send('Not a resource.\n');
});

app.get(TUTURUU, function (req, res) {
    res.status(200).header("Content-Type", "application/json");
    res.send({count: tempCounter});
});

app.post(TUTURUU, function (req, res) {
    tempCounter++;
    logCounter();
    res.status(200).header("Content-Type", "application/json");
    res.send({count: tempCounter});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`tuturuu-api: server listening on port ${PORT}`);
logCounter();