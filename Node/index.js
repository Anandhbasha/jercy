import express from 'express'
import route from './Router/route.js'
import Database from './Database.js'

const app = express()

app.use(express.json())

const PORT = 2356

app.use("/crud",route)

Database("mongodb://127.0.0.1:27017/Newone")


app.listen(PORT,()=>{
    console.log(`The server is running under the http://localhost:${PORT}`);
    
})