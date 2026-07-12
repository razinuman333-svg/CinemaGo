import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkMiddleware } from '@clerk/express'


const app = express()
const port = 3000


await connectDB()

// Middleware
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

// API routes
app.get('/',(req,res)=>res.send('Numaneyy You Will Be SuccessFull'))



app.listen(port ,()=>{
    console.log('server connected to' ,port)
})