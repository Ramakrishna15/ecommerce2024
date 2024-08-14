import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';




dotenv.config();
connectDB();
const app=express(); 
app.get('/',(req,res)=>{
    res.send("<h1>welcome to ecoznmmerce app</h1>");
});
app.use(morgan('dev'));
app.use(express.json());
const port=process.env.port ;

app.listen(port,()=>{
    console.log(`server running ${process.env.DEV_MODE} on ${port}`.bgCyan.white)
});

