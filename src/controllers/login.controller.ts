import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories';
import { User } from '../models';
import { Login } from '../models';
import { sign, verify } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import {
  HttpErrors,
  post,
  requestBody,
} from '@loopback/rest';

export class LoginController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) { }

  @post('/login')
  async loginUser(@requestBody() login: Login): Promise<any> {
    var users = await this.userRepo.find();

    var email = login.email;

    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.email == email && await bcrypt.compare(login.password, user.password)) {

        var jwt = sign(
          {
            user: {
              id: user.id,
              firstname: user.firstname,
              email: user.email
            },
            anything: "hello"
          },
          'shh',
          {
            issuer: 'auth.ix.co.za',
            audience: 'ix.co.za',
          },
        );

        return {
          token: jwt,
        };
      }
    }

    throw new HttpErrors.Unauthorized('User not found, sorry!');
    //return "Error";
  }

}