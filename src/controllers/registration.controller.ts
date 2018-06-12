import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import * as bcrypt from 'bcrypt';
import {
  HttpErrors,
  post,
  requestBody,
} from '@loopback/rest';

export class RegistrationController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) { }

  @post('/registration')
  async registerUser(@requestBody() user: User): Promise<User> {
    // Hash incoming password
    let hashed = await bcrypt.hash(user.password, 10);
    // Check that required fields are supplied
    if (!user.email || !user.password) {
      throw new HttpErrors.BadRequest('missing data');
    }

    // Check that user does not already exist
    let userExists: boolean = !!(await this.userRepo.count({ email: user.email }));

    if (userExists) {
      throw new HttpErrors.BadRequest('user already exists');
    }

    var storedUser = new User();
    storedUser.firstname = user.firstname
    storedUser.lastname = user.lastname
    storedUser.email = user.email
    storedUser.password = hashed

   await this.userRepo.create(storedUser);
   storedUser.passowrd = "";
   return storedUser;
  }
}