import { UserRepository } from '../repositories';
import { User } from '../models';
export declare class UserController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    getDonationsByUserId(userId: number, trash: Date): Promise<void>;
    findUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
}
