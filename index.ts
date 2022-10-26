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
app.get('/hello', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to GET Route: Hello World');
});

// Execute APP and Listen Request
app.listen(port, () => {
    console.log(`EXPRESS RUNNER: Running at http://localhost:${port}`);
})