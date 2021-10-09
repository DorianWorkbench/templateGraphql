import express, { Express, NextFunction, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { CustomError } from "./src/errors/CustomError";
import { GraphqlClient } from "./src/graphql/index";
import { UserRepository } from "./src/repository/index";
import { UserService } from "./src/service/index";
import { MysqlClient } from "./src/tools/MysqlClient";

require('dotenv').config()
const app:Express = express();

const graphqlClient:GraphqlClient = new GraphqlClient(new UserService(new UserRepository()));

app.use(express.json());

// MysqlClient creation. (Check if calling this middleware is optimised && Check if we should create pool of connection).
// Check how to "clean" this call.
app.use(({next})=>MysqlClient.getclient(next!));

app.use('/graphql', graphqlHTTP(async()=>({ schema: await graphqlClient.generateGraphqlSchema() })));

// TODO: Check how to handle global error (maybe create second middleware)
app.use((err:CustomError, req:Request, res:Response, next:NextFunction)=>{
    console.log("Je passe dans la gestion d'erreur");
    console.log(err);
    return res.status(err.statusCode).json({
        error:err.render()
    });
});

app.listen(3000, ()=>{
    console.log("server on");
});