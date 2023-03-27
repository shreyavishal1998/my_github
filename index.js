const { Router } = require('express');
const express = require('express');
const app = express()
app.get('/get', (req, res) => {
    res.send("Hello")
})
app.listen(3004, () => {
    console.log('server listning on port 3004')
})