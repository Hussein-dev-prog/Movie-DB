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