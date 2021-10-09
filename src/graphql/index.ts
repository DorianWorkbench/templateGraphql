import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { UserMutation } from "./mutations/UserMutation";
import {UserResolver} from "./resolvers/UserResolver";
import { UserService } from "../service/index";

export class GraphqlClient{
    
    // TODO: Inject services.
    private userService:UserService;
    private userResolver:UserResolver;
    private userMutation:UserMutation;

    constructor(userService:UserService){
        this.userService = userService;
        this.userResolver = new UserResolver(this.userService);
        this.userMutation = new UserMutation(this.userService);
    }

    private async graphqlQuery():Promise<GraphQLObjectType>{
            return new GraphQLObjectType({
                name:"rootQueryType",
                fields:{  
                    ...await this.userResolver.users(),
                    ...await this.userResolver.user()
                    
                },
            });
    }
    private async graphqlMutation():Promise<GraphQLObjectType>{
        return new GraphQLObjectType({
            name:"Mutation",
            fields:{
                ...await this.userMutation.createUser()
            }
         });
    }
    public async generateGraphqlSchema():Promise<GraphQLSchema>{
        return  new GraphQLSchema({
            query:await this.graphqlQuery(),
            mutation:await this.graphqlMutation()
        });
    }
}