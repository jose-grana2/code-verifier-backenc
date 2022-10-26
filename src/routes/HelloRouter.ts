import express, {Request, Response} from "express";
import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";
import { BasicResponse } from "@/controller/types";

//Router from express
let helloRouter = express.Router();

// GET http://localhost:8000/api/hello
helloRouter.route('/')
    .get(async (req : Request, res : Response) => {
        //Obtain a query param
        let name : any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);
        //Controller instance to execute method
        const controller : HelloController = new HelloController;
        //Obtain Response
        const response = await controller.getMessage(name)
        //Send to the client the response
        return res.send(response);

    });


export default helloRouter;