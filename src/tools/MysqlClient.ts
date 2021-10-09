import { NextFunction } from "express";
import mysql2 from "mysql2/promise";
import {configBdd} from "../config/configBdd"

export class MysqlClient {
    public static bddClient:mysql2.Connection | null = null;
    constructor(){}

    /**
     * Generate client.
     * Depend on express NextFunction (bad).
     * @param next:NextFunction
     *  ->next: allows to acces to next routes. 
     * @returns 
     */
    public static async getclient(next:NextFunction){
        if(!MysqlClient.bddClient){
            MysqlClient.bddClient = await mysql2.createConnection(configBdd());
            return next();
        }
        return next();
    }
} 