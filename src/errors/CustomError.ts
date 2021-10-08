export interface CustomError{
    statusCode:number;
    message:string;
    render():CustomError;
}