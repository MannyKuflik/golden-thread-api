import { repository } from '@loopback/repository';
import { Role_mapRepository } from '../repositories';
import { Role_map } from '../models';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';

export class Role_mapController {
  constructor(
    @repository(Role_mapRepository) protected role_mapRepo: Role_mapRepository,
  ) { }

  @get('/role_maps')
  async findRole_maps(): Promise<Role_map[]> {
    return await this.role_mapRepo.find();
  }

  @get('/role_maps/{id}')
  async findRole_mapsById(@param.path.number('id') id: number): Promise<Role_map> {
    // Check for valid ID
    let role_mapExists: boolean = !!(await this.role_mapRepo.count({ id }));

    if (!role_mapExists) {
      throw new HttpErrors.BadRequest(`role_map ID ${id} does not exist`);
    }

    return await this.role_mapRepo.findById(id);
  }
}