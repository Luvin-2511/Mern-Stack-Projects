import {app,server} from './socket/socket.js'
import express from 'express'
import dotenv from 'dotenv'
import { errorMiddleware } from './middlewares/error.middleware.js';
import { connectDB } from './db/connection1.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config()
connectDB();


app.use(express.json())
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
}))
app.use(cookieParser())
const PORT = process.env.PORT

import userRoute from './routes/user.route.js'
app.use('/api/v1/user', userRoute)

app.use(errorMiddleware);

import messageRoutes from './routes/message.route.js'
app.use('/api/v1/message', messageRoutes)


server.listen(PORT, () => {
    console.log(`Chal rha h server on ${PORT}`)
})