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
let User_banksController = class User_banksController {
    constructor(user_banksRepo) {
        this.user_banksRepo = user_banksRepo;
    }
    async findRoles() {
        return await this.user_banksRepo.find();
    }
    async findUser_banksById(id) {
        // Check for valid ID
        let user_banksExists = !!(await this.user_banksRepo.count({ id }));
        if (!user_banksExists) {
            throw new rest_1.HttpErrors.BadRequest(`user_bank ID ${id} does not exist`);
        }
        return await this.user_banksRepo.findById(id);
    }
};
__decorate([
    rest_1.get('/user_banks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User_banksController.prototype, "findRoles", null);
__decorate([
    rest_1.get('/user_banks/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], User_banksController.prototype, "findUser_banksById", null);
User_banksController = __decorate([
    __param(0, repository_1.repository(repositories_1.User_banksRepository)),
    __metadata("design:paramtypes", [repositories_1.User_banksRepository])
], User_banksController);
exports.User_banksController = User_banksController;
//# sourceMappingURL=user_banks.controller.js.map