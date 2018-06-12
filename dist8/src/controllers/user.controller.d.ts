import { UserRepository } from '../repositories';
import { User } from '../models';
export declare class UserController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    getDonationsByUserId(userId: number, trash: Date): Promise<void>;
    getAllUsers(jwt: string): Promise<Array<User>>;
    getUserById(id: number, jwt: string): Promise<User>;
}
