const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.use(cors())

app.get('/',(req,res)=>{
res.send("Dragon News Is Running")
});

app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    `Dragon is Running on ${port}`
})