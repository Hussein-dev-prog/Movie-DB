const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`OK`)
})
app.get('/test', (req, res) => {
    res.send({ status: 200, message: "ok" })
});
app.get('/time', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    var seconds = date.getSeconds();
    res.send({ status: 200, message: hour + ":" + seconds })

});

//hello with id
app.get('/hello/:id', (req, res) => {
    res.status(200).send("Hello, " + req.params.id)
})


//search
app.get('/search', (req, res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        const response = {
            status: 200, message: "ok", data: search
        };

        res.send(response);
    }
    else {
        const response = {
            status: 500, error: true, message: "you have to provide a search"
        };


        res.status(500).send(response);

    }
});