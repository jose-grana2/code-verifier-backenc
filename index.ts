import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';

//Configuration the .env file 
dotenv.config();

const port = process.env.PORT || 8000;
 
//Execute server
server.listen(port, () => {
    LogSuccess(`[Server ON]: Running in http://localhost:${port}/api`);
});

//Control Server ERROR
server.on('error', (error) => {
    LogError(`[Server ERROR]: ${error}`);
});
