import { RoleRepository } from '../repositories';
import { Role } from '../models';
export declare class RoleController {
    protected roleRepo: RoleRepository;
    constructor(roleRepo: RoleRepository);
    findRoles(): Promise<Role[]>;
    findRolesById(id: number): Promise<Role>;
}
