const express = require('express')
const cors = require('cors')
const app = express()

let port = process.env.PORT || 3000
const data = require('./data.json')

app.use(cors)

app.get('/', (req, res)=>{
    res.status(200).send('Para acceder a la api, favor de acceder a traves de /api/agenda')
})
app.get('/api/agenda', (req, res)=>{
    res.status(200).send(data)
})

app.listen(port,()=>{
    console.log(`Server Up and Running on port ${port}`)
})