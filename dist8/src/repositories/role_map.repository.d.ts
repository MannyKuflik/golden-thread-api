import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Role_map } from '../models';
export declare class Role_mapRepository extends DefaultCrudRepository<Role_map, typeof Role_map.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
