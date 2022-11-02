import { BasicResponse } from "@/controller/types";

export interface IHelloController {
    getMessage(name? : string) : Promise<BasicResponse>;
}
export interface IGoodbyeController {
    getMessage(name : string) : Promise<BasicResponse>;
}