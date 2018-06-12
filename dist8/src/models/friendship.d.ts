import { Entity } from '@loopback/repository';
export declare class Friendship extends Entity {
    id?: number;
    user_id: number;
    friend_user_id: number;
    getId(): number | undefined;
}
