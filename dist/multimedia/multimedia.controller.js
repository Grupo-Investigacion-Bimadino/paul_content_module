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
exports.MultimediaController = void 0;
const common_1 = require("@nestjs/common");
const multimedia_service_1 = require("./multimedia.service");
let MultimediaController = class MultimediaController {
    constructor(multimediaService) {
        this.multimediaService = multimediaService;
    }
    findOne(id) {
        return this.multimediaService.findOne(id);
    }
    findAll() {
        return this.multimediaService.findAll();
    }
    create(createMultimediaDto) {
        return this.multimediaService.create(createMultimediaDto);
    }
    update(id, updateMultimedia) {
        return this.multimediaService.update(id, updateMultimedia);
    }
    delete(id) {
        return this.multimediaService.delete(id);
    }
};
exports.MultimediaController = MultimediaController;
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MultimediaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MultimediaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MultimediaController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], MultimediaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MultimediaController.prototype, "delete", null);
exports.MultimediaController = MultimediaController = __decorate([
    (0, common_1.Controller)("multimedia"),
    __metadata("design:paramtypes", [multimedia_service_1.MultimediaService])
], MultimediaController);
//# sourceMappingURL=multimedia.controller.js.map