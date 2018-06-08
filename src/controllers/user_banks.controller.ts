import { repository } from '@loopback/repository';
import { User_banksRepository } from '../repositories';
import { User_banks } from '../models';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';

export class User_banksController {
  constructor(
    @repository(User_banksRepository) protected user_banksRepo: User_banksRepository,
  ) { }

  @get('/user_banks')
  async findRoles(): Promise<User_banks[]> {
    return await this.user_banksRepo.find();
  }

  @get('/user_banks/{id}')
  async findUser_banksById(@param.path.number('id') id: number): Promise<User_banks> {
    // Check for valid ID
    let user_banksExists: boolean = !!(await this.user_banksRepo.count({ id }));

    if (!user_banksExists) {
      throw new HttpErrors.BadRequest(`user_bank ID ${id} does not exist`);
    }

    return await this.user_banksRepo.findById(id);
  }
}