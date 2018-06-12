import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Friendship } from '../models';
export declare class FriendshipRepository extends DefaultCrudRepository<Friendship, typeof Friendship.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
