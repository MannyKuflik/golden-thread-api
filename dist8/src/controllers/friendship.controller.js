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
let FriendshipController = class FriendshipController {
    constructor(friendshipRepo) {
        this.friendshipRepo = friendshipRepo;
    }
    async findfriendships() {
        return await this.friendshipRepo.find();
    }
    async findFriendshipsById(id) {
        // Check for valid ID
        let friendshipExists = !!(await this.friendshipRepo.count({ id }));
        if (!friendshipExists) {
            throw new rest_1.HttpErrors.BadRequest(`charity ID ${id} does not exist`);
        }
        return await this.friendshipRepo.findById(id);
    }
};
__decorate([
    rest_1.get('/friendships'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FriendshipController.prototype, "findfriendships", null);
__decorate([
    rest_1.get('/charities/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FriendshipController.prototype, "findFriendshipsById", null);
FriendshipController = __decorate([
    __param(0, repository_1.repository(repositories_1.FriendshipRepository)),
    __metadata("design:paramtypes", [repositories_1.FriendshipRepository])
], FriendshipController);
exports.FriendshipController = FriendshipController;
//# sourceMappingURL=friendship.controller.js.map