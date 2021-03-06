import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    id?: number;
    name: string;
    mission: string;
    email: string;
    website_url: string;
    logo_url: string;
    getId(): number | undefined;
}
