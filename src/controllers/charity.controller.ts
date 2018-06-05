import { repository } from '@loopback/repository';
import { CharityRepository } from '../repositories';
import { Charity } from '../models';
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';

export class CharityController {
  constructor(
    @repository(CharityRepository) protected charityRepo: CharityRepository,
  ) {}

  @get('/charities')
  async findCharities(): Promise<Charity[]> {
    return await this.charityRepo.find();
  }

  @get('/charitiess/{id}')
  async findCharityById(@param.path.number('id') id: number): Promise<Charity> {
    // Check for valid ID
    let charityExists: boolean = !!(await this.charityRepo.count({ id }));

    if (!charityExists) {
      throw new HttpErrors.BadRequest(`charity ID ${id} does not exist`);
    }

    return await this.charityRepo.findById(id);
  }
}
