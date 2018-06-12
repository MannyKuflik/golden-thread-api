import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { User_banks } from '../models';
export declare class User_banksRepository extends DefaultCrudRepository<User_banks, typeof User_banks.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
