import { Entity, property, model } from '@loopback/repository';

@model()
export class Role_map extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  user_id: number;

  @property({
    type: 'string',
  })
  role_id: number;

  getId() {
    return this.id;
  }
}