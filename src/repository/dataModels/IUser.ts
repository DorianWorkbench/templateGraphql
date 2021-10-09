import { RowDataPacket } from "mysql2";

export interface IUser extends RowDataPacket{
    id:number;
    name:string;
    email:string;
    age:number;
}