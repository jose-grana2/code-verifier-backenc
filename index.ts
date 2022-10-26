import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config();

// Create Express App
const app : Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first route of app
app.get('/', (req: Request, res: Response) => {
    // Send Hello World
    res.send('APP Express + TS + Swagger + Mongoose');
});

// Define the first route of app
app.get('/hello/:name?', (req: Request, res: Response) => {
    res.status(200).json({"data": {"message":"Hello " + (req.params.name || 'anonymous')}})
});

app.get('/json', (req: Request, res: Response ) => {
    res.status(200).json({"data": {"message":"Goodbye, world"}})
});

// Execute APP and Listen Request
app.listen(port, () => {
    console.log(`EXPRESS RUNNER: Running at http://localhost:${port}`);
})