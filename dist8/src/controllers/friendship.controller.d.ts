import { FriendshipRepository } from '../repositories';
import { Friendship } from '../models';
export declare class FriendshipController {
    protected friendshipRepo: FriendshipRepository;
    constructor(friendshipRepo: FriendshipRepository);
    findfriendships(): Promise<Friendship[]>;
    findFriendshipsById(id: number): Promise<Friendship>;
}
