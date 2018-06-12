import { User_banksRepository } from '../repositories';
import { User_banks } from '../models';
export declare class User_banksController {
    protected user_banksRepo: User_banksRepository;
    constructor(user_banksRepo: User_banksRepository);
    findRoles(): Promise<User_banks[]>;
    findUser_banksById(id: number): Promise<User_banks>;
}
