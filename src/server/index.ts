//Environment variables
import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

//Security
import cors from 'cors';
import helmet from "helmet";


//TODO HTTPS

//Root router
import router from '../routes';

// Configuration the .env file
dotenv.config();

// Create Express App
const server : Express = express();

//Define SERVER to use /api and use the RootRouter from index.ts in routes
//From this point onnover: https:/localhost:8000/api/...
server.use('/api', router)

//Mongoose Connection

//Security Config

server.use(helmet());
server.use(cors());

//Content type:
server.use(express.urlencoded({extended : true, limit : '50mb'}));
server.use(express.json({limit : '50mb'}));

//Redirection Config
//https://localhost:8000/ --> https://localhost:8000/api 
server.get('/', (req : Request, res: Response) => {
    res.redirect('/api');
});

export default server;