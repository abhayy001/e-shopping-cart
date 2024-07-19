const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./src/routes/route')
const {dbConnection} = require('./src/Config/dbConfig')


let port = 3000

app.use(cors())
app.use(express.json())
app.use(route)

const serverStart = async()=>{
    try {
        dbConnection()
        app.listen(port, ()=>{
            console.log('Express app running on', port)
        })
    } catch (error) {
        console.log(error.message)
    }
}

serverStart()