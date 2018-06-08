import { Entity, property, model } from '@loopback/repository';

@model()
export class User_banks extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  address: string;

  getId() {
    return this.id;
  }
}