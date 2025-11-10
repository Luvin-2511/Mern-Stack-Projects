import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB=async ()=>{
    try{
        const MONGODB_URL=process.env.MONGODB_URL
        const instance = await mongoose.connect(MONGODB_URL)
        console.log(`Connected :${instance.connection.host}`)
    }catch(err){
        console.log(err)
    }
}