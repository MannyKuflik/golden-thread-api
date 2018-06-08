import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';

export class UserController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) { }


  @get('/users/{user_id}/donations')
  async getDonationsByUserId(
    @param.path.number('user_id') userId: number,
    @param.query.date('garbage') trash: Date,

  ) {
    console.log(userId);
    console.log(trash);
  }

  @get('/users')
  async findUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<User> {
    // Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }

    return await this.userRepo.findById(id);
  }
}

  // @get(/user)
  // async findUsersById(@param.path.number('id') id: number): Promise<User> {
  //   // Check for valid ID
  //   let userExists: boolean = !!(await this.userRepo.count({ id }));

  //   if (!userExists) {
  //     throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
  //   }

  //   return await this.userRepo.findById(id);
  // }
