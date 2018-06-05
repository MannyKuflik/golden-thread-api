import { CharityRepository } from '../repositories';
import { Charity } from '../models';
export declare class CharityController {
    protected charityRepo: CharityRepository;
    constructor(charityRepo: CharityRepository);
    findCharities(): Promise<Charity[]>;
    findCharityById(id: number): Promise<Charity>;
}
