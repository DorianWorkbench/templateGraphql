import { GraphQLFieldConfigMap, GraphQLInt, GraphQLList, GraphQLString } from "graphql"
import { UserType } from "../types/index";
import { UserService } from "../../service/index";
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
                type: UserType,
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
                    return await that.userService.createUser(userCreateDTO);
                }
            }
        }
    }
}