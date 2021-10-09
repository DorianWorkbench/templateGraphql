import { UserCreateDTO } from "../dto/UserDTO";
import { MysqlClient } from "../tools/MysqlClient";
import { IUser } from "./dataModels/IUser";

export class UserRepository {
    
    constructor(){}

    // TODO : Check how to implement catch error.
    async getUser(id:number):Promise<IUser>{
        const [user] = await MysqlClient.bddClient!.execute<IUser[]>("SELECT * FROM USER WHERE id = ?" , [id]);
        return user[0];
    }

    async getAllUser():Promise<IUser[]>{
        const [users] = await MysqlClient.bddClient!.execute<IUser[]>("SELECT * FROM USER");
        return users;
    }

    async createUser(userCreateDTO:UserCreateDTO){
        const [createId] = await MysqlClient.bddClient!.execute("INSERT INTO USER(name, email, age) VALUES(?, ?, ?)", [userCreateDTO.name, userCreateDTO.email, userCreateDTO.age]);
        const res = await this.getUser(JSON.parse(JSON.stringify(createId)).insertId);
        return res;
    }
}