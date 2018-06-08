import { repository } from '@loopback/repository';
import { RoleRepository } from '../repositories';
import { Role } from '../models';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';

export class RoleController {
  constructor(
    @repository(RoleRepository) protected roleRepo: RoleRepository,
  ) { }

  @get('/roles')
  async findRoles(): Promise<Role[]> {
    return await this.roleRepo.find();
  }

  @get('/roles/{id}')
  async findRolesById(@param.path.number('id') id: number): Promise<Role> {
    // Check for valid ID
    let roleExists: boolean = !!(await this.roleRepo.count({ id }));

    if (!roleExists) {
      throw new HttpErrors.BadRequest(`role ID ${id} does not exist`);
    }

    return await this.roleRepo.findById(id);
  }
}