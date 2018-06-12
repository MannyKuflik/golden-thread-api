"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
const rest_1 = require("@loopback/rest");
const jsonwebtoken_1 = require("jsonwebtoken");
let UserController = class UserController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    // @post('/registration')
    // async createUser(@requestBody() user: User){
    //   return await this.userRepo.create(user);
    // }
    async getDonationsByUserId(userId, trash) {
        console.log(userId);
        console.log(trash);
    }
    async getAllUsers(jwt) {
        if (!jwt) {
            throw new rest_1.HttpErrors.Unauthorized("No jwt given");
        }
        try {
            jsonwebtoken_1.verify(jwt, 'shh');
            return await this.userRepo.find();
        }
        catch (err) {
            throw new rest_1.HttpErrors.BadRequest("Jwt not valid");
        }
    }
    async getUserById(id, jwt) {
        if (!jwt) {
            throw new rest_1.HttpErrors.Unauthorized("No jwt given");
        }
        try {
            jsonwebtoken_1.verify(jwt, 'shh');
            return await this.userRepo.findById(id);
        }
        catch (err) {
            throw new rest_1.HttpErrors.NotFound('User not found, sorry!');
        }
    }
};
__decorate([
    rest_1.get('/users/{user_id}/donations'),
    __param(0, rest_1.param.path.number('user_id')),
    __param(1, rest_1.param.query.date('garbage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getDonationsByUserId", null);
__decorate([
    rest_1.get('/users'),
    __param(0, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    rest_1.get('/users/{id}'),
    __param(0, rest_1.param.query.number('id')),
    __param(1, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
UserController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], UserController);
exports.UserController = UserController;
// @get(/user)
// async findUsersById(@param.path.number('id') id: number): Promise<User> {
//   // Check for valid ID
//   let userExists: boolean = !!(await this.userRepo.count({ id }));
//   if (!userExists) {
//     throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
//   }
//   return await this.userRepo.findById(id);
// }
//# sourceMappingURL=user.controller.js.map