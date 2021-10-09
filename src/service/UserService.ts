import { UserCreateDTO } from "../dto/UserDTO";
import { UserRepository } from "../repository/UserRepository";

export class UserService{

    private userRepository:UserRepository;

    constructor(userRepository:UserRepository){
        this.userRepository = userRepository;
    }
    // TODO : Check if should we permute IUser return by interface object contract. (Repo or Service ?).
    async createUser(userCreateDTO:UserCreateDTO){
        return await this.userRepository.createUser(userCreateDTO);
    }

    async getUser(id:number){
        return await this.userRepository.getUser(id);
    }

    async getAllUsers(){
        return await this.userRepository.getAllUser();
    }
}