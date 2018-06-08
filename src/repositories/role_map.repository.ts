import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Role_map } from '../models';
import { inject } from '@loopback/core';

export class Role_mapRepository extends DefaultCrudRepository<
  Role_map,
  typeof Role_map.prototype.id
> {
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
  ) {
    super(Role_map, datasource);
  }
}