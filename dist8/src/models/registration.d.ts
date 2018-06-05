import { Entity } from '@loopback/repository';
export declare class Registration extends Entity {
    id?: number;
    Email: string;
    phonenumber: string;
    username: string;
    password: string;
    getId(): number | undefined;
}
