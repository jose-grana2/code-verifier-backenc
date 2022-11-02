import { BasicResponse } from "./types";
import { IGoodbyeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class GoodbyeController implements IGoodbyeController {
    
    public async getMessage(name : string | undefined): Promise<BasicResponse> {
        LogSuccess('[api/goodbye] Get Request');
        return {
            "message" : `Goodbye ${name || 'maquinote'}`,
            "date" : Date()
        }
    }

}