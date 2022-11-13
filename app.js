const express=require('express')
const connectdb=require('./Db/db')
const routes=require('./routes/routes')
require('dotenv').config()
const app=express()

app.use(express.json())


app.use('/api/v1/salonsetup',routes )

const start= async ()=>{
    try {
        await connectdb(process.env.MONGO_URI)
        app.listen(3000)
        console.log('server starter')
    } catch (error) {
        console.log(error)
    }
}
start()