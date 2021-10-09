import { CustomError } from "./CustomError";

export class BddError extends Error implements CustomError{
    
    statusCode: number;
    message: string;
    globalError: any;
    constructor(statusCode:number, message:string, globalError:any){
        super(message);
        this.statusCode = statusCode;
        this.message = message
        this.globalError = globalError;
    }
    render(): CustomError {
        return this;
    }
}