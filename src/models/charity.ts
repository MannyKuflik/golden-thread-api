import { Entity, property, model } from '@loopback/repository';

@model()
export class Charity extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name: number;

  @property({
    type: 'string',
  })
  mission: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  website_url: string;

  @property({
    type: 'string',
    required: true,
  })
  logo_url: string;

  getId() {
    return this.id;
  }
}