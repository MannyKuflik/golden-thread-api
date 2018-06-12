import { Entity } from '@loopback/repository';
export declare class Role_map extends Entity {
    id?: number;
    user_id: number;
    role_id: number;
    getId(): number | undefined;
}
