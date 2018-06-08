import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Friendship } from '../models';
import { inject } from '@loopback/core';

export class FriendshipRepository extends DefaultCrudRepository<
  Friendship,
  typeof Friendship.prototype.id
> {
  constructor(
    @inject('datasources.db') protected datasource: juggler.DataSource,
  ) {
    super(Friendship, datasource);
  }
}