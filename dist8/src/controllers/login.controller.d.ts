import { UserRepository } from '../repositories';
import { Login } from '../models';
export declare class LoginController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    loginUser(login: Login): Promise<any>;
}
