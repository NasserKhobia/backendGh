import cookieParser from 'cookie-parser';
import { configDotenv } from 'dotenv';
import express from 'express';
import Class from '../backendGh/router/Class.js' 
import Unit from '../backendGh/router/Unit.js'; 
import connectDb from './DB/connect.js';
import Quastion from './router/Quastion.js';
import SubQuastion from './router/SubQuastion.js';
import Auth from './router/Auth.js';
const app = express();
const port = process.env.PORT||6000;

configDotenv();

app.use(cookieParser())
app.use(express.json())

app.use('/class',Class);
app.use('/unit',Unit);
app.use('/quastion',Quastion);
app.use('/subquastion',SubQuastion);
app.use('/auth',Auth);

app.listen(port,()=>{
    console.log(`listen in the port ${port}`);
    // connectDb();
})