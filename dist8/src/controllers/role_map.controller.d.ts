import { Role_mapRepository } from '../repositories';
import { Role_map } from '../models';
export declare class Role_mapController {
    protected role_mapRepo: Role_mapRepository;
    constructor(role_mapRepo: Role_mapRepository);
    findRole_maps(): Promise<Role_map[]>;
    findRole_mapsById(id: number): Promise<Role_map>;
}
