import { UserCreateDTO } from "../dto/UserDTO";
import { users } from "../graphql/example";

export class UserService{
    // TODO:Inject UserRepository.
    constructor(){}

    async createUser(userCreateDTO:UserCreateDTO):Promise<Array<Object>>{
        users.push(userCreateDTO);
        return users;
    }

    async getUser(id:number){
        return users.filter((e)=>e.id === id)[0];
    }

    async getAllUsers():Promise<Array<Object>>{
        return users;
    }
}