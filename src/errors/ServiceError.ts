import { CustomError } from "./CustomError";

export class ServiceError extends Error implements CustomError{
    
    statusCode:number;
    message:string;
    details:any;

    constructor(statusCode:number, message:string, details:any){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.details = details;
    }
    render(): CustomError {
        throw this;
    }
}