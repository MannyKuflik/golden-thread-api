import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { User_banks } from '../models';
import { inject } from '@loopback/core';

export class User_banksRepository extends DefaultCrudRepository<
  User_banks,
  typeof User_banks.prototype.id
> {
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
  ) {
    super(User_banks, datasource);
  }
}