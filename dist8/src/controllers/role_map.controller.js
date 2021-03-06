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
let Role_mapController = class Role_mapController {
    constructor(role_mapRepo) {
        this.role_mapRepo = role_mapRepo;
    }
    async findRole_maps() {
        return await this.role_mapRepo.find();
    }
    async findRole_mapsById(id) {
        // Check for valid ID
        let role_mapExists = !!(await this.role_mapRepo.count({ id }));
        if (!role_mapExists) {
            throw new rest_1.HttpErrors.BadRequest(`role_map ID ${id} does not exist`);
        }
        return await this.role_mapRepo.findById(id);
    }
};
__decorate([
    rest_1.get('/role_maps'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Role_mapController.prototype, "findRole_maps", null);
__decorate([
    rest_1.get('/role_maps/{id}'),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Role_mapController.prototype, "findRole_mapsById", null);
Role_mapController = __decorate([
    __param(0, repository_1.repository(repositories_1.Role_mapRepository)),
    __metadata("design:paramtypes", [repositories_1.Role_mapRepository])
], Role_mapController);
exports.Role_mapController = Role_mapController;
//# sourceMappingURL=role_map.controller.js.map