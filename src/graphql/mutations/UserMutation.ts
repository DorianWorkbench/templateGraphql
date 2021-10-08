import { GraphQLFieldConfigMap, GraphQLInt, GraphQLList, GraphQLString } from "graphql"
import { UserType } from "../types/User";
import { UserService } from "../../service/UserService";
import { UserCreateDTO } from "../../dto/UserDTO";

export class UserMutation {

    private userService:UserService;

    constructor(userService:UserService) {
        this.userService = userService;
    }

    async createUser():Promise<GraphQLFieldConfigMap<any,any>>{
        let that = this;
        return { 
            createUser:{
                type:new GraphQLList(UserType),
                args:{
                    id: {type:GraphQLInt},
                    name: {type:GraphQLString},
                    email: {type:GraphQLString},
                    age: {type:GraphQLInt},
                },
                async resolve(parent, args){
                    const userCreateDTO:UserCreateDTO = {
                        id:args.id,
                        name:args.name,
                        age:args.age,
                        email:args.email,
                    }
                    await that.userService.createUser(userCreateDTO);
                }
            }
        }
    }
}