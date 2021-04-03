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

app.get('/movies/create', (req, res) => {  //movies/add
    res.send('create movie')
})
app.get('/movies/read', (req, res) => {    //movies/get
    const response = { status: 200, data: movies };
    res.status(200).send(response)
})
app.get('/movies/update', (req, res) => {  //movies/edit
    res.send('update movie')
})
app.get('/movies/delete', (req, res) => {  //movies/delete
    res.send('delete movie')
})


const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

