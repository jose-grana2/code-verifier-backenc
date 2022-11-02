import express, {Request, Response} from "express";
import { GoodbyeController } from "../controller/GoodbyeController";
import { LogInfo } from "../utils/logger";

//Router from express
let goodbyeRouter = express.Router();

//GET http://localhost:8000/api/goodbye
goodbyeRouter.route('/')
    .get(async (req: Request, res: Response) => {
        //Obtain query param
        let name : any = req?.query?.name;
        LogInfo(`Query param: ${name}`);
        //Controller instance to execute method
        const controller : GoodbyeController = new GoodbyeController;
        //Obtain Response
        const response = await controller.getMessage(name);
        //Send to the client the response
        return res.send(response);
})

export default goodbyeRouter;





