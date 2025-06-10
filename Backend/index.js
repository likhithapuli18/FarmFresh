const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const port = process.env.port || 3004

app.use(cors())
app.use(express.json())

app.use('/test',require('./Routes/test'))
app.use('/fruits',require('./Routes/fruits'))
app.use('/vegetable',require('./Routes/vegetables'))
app.use('/data',require('./Routes/hay'))
app.use('/Dairy',require('./Routes/dairy'))
app.listen(port,()=>{
    console.log("server is running... on port",port)
})