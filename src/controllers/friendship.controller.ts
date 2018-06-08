import { repository } from '@loopback/repository';
import { FriendshipRepository } from '../repositories';
import { Friendship } from '../models';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';

export class FriendshipController {
  constructor(
    @repository(FriendshipRepository) protected friendshipRepo: FriendshipRepository,
  ) {}

  @get('/friendships')
  async findfriendships(): Promise<Friendship[]> {
    return await this.friendshipRepo.find();
  }

  @get('/charities/{id}')
  async findFriendshipsById(@param.path.number('id') id: number): Promise<Friendship> {
    // Check for valid ID
    let friendshipExists: boolean = !!(await this.friendshipRepo.count({ id }));

    if (!friendshipExists) {
      throw new HttpErrors.BadRequest(`charity ID ${id} does not exist`);
    }

    return await this.friendshipRepo.findById(id);
  }
}
