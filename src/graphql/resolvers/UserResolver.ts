import { GraphQLFieldConfigMap, GraphQLInt, GraphQLList } from "graphql";
import { UserType } from "../types/User";
import { UserService } from "../../service/UserService";

export class UserResolver{
    private userService:UserService;

    constructor(userService:UserService){
        this.userService = userService;
    }

    async users():Promise<GraphQLFieldConfigMap<any,any>> {
        const that = this; 
        return { 
            users:{
                type: GraphQLList(UserType),
                async resolve(parent, args){return await that.userService.getAllUsers();}
            } 
        };   
    }
    
    async user():Promise<GraphQLFieldConfigMap<any,any>> {
        const that = this; 
        return { 
            user:{
                type: UserType,
                args:{
                    id:{type:GraphQLInt}
                },
                async resolve(parent, args){
                    return await that.userService.getUser(args.id);
                }
            }  
        };   
    }
}