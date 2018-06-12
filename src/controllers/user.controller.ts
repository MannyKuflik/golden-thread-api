import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import { Login } from '../models';
import * as bcrypt from 'bcrypt';
import {
  HttpErrors,
  get,
  post,
  requestBody,
  param,
} from '@loopback/rest';
import { sign, verify } from 'jsonwebtoken';

export class UserController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) { }

  // @post('/registration')
  // async createUser(@requestBody() user: User){
  //   return await this.userRepo.create(user);
  // }

  @get('/users/{user_id}/donations')
  async getDonationsByUserId(
    @param.path.number('user_id') userId: number,
    @param.query.date('garbage') trash: Date,

  ) {
    console.log(userId);
    console.log(trash);
  }

  @get('/users')
  async getAllUsers(@param.query.string('jwt') jwt: string): Promise<Array<User>> {
    if (!jwt) {
      throw new HttpErrors.Unauthorized("No jwt given")
    }
    try {
      verify(jwt, 'shh')
      return await this.userRepo.find();

    }
    catch (err) {
      throw new HttpErrors.BadRequest("Jwt not valid")
    }
  }

  @get('/users/{id}')
  async getUserById(@param.query.number('id') id: number, 
  @param.query.string('jwt') jwt: string, ): Promise<User> {
    if (!jwt) {
      throw new HttpErrors.Unauthorized("No jwt given")
    }
    try {
      verify(jwt, 'shh')
      return await this.userRepo.findById(id);
    } catch (err) {
      throw new HttpErrors.NotFound('User not found, sorry!');
    }
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
