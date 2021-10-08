import express, {Express, NextFunction, Request, Response} from "express";
import { graphqlHTTP } from "express-graphql";
import { CustomError } from "./src/errors/CustomError";
import {GraphqlClient} from "./src/graphql/index";
import { UserService } from "./src/service/UserService";

const app:Express = express();


const graphqlClient:GraphqlClient = new GraphqlClient(new UserService());

app.use('/graphql', graphqlHTTP(async()=>({ schema: await graphqlClient.generateGraphqlSchema() })));

// TODO: Check how to 
app.use((err:CustomError, req:Request, res:Response, next:NextFunction)=>{
    return res.status(err.statusCode).json({
        error:err.render()
    });
});

app.listen(3000, ()=>{
    console.log("server on");
});