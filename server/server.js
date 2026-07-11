import express from 'express'
import cors from 'cors'
import 'dotenv/config'


const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use(cors())

// API routes
app.get('/',(req,res)=>res.send('Numaneyy You Will Be SuccessFull'))



app.listen(port ,()=>{
    console.log('server connected to' ,port)
})