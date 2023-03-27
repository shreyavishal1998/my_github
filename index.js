const { Router } = require('express');
const express = require('express');
const app = express()
app.get('/get', (req, res) => {
    res.send("Hello")
})
app.get("/data", () => {
    res.send({ name: "groot", age: 32 })
})
app.listen(3004, () => {
    console.log('server listning on port 3004')
})