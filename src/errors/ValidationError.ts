import { CustomError } from "./CustomError";

export class ValidationError extends Error implements CustomError{
    
    statusCode:number;
    message:string;

    constructor(statusCode:number, message:string){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
    render(): CustomError {
        return this;
    }
} 