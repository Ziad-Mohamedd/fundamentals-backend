const app = require('express')();

app.get("/", (req, res) => res.send("hello!"));

app.get("/stream", (req, res) => {

    res.setHeader("content-Type", "text/event-stream");
    send(res);

})

const port = process.env.PORT || 8888;

let i = 0;

function send (res) {
    
    res.write("data: " + `hello from server ---- [${i++}]\n\n`);

    setTimeout(() => send(res), 1000);
}

app.listen(port)
console.log(`Listening on ${port}`);