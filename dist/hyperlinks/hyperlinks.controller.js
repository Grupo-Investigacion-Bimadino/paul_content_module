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
exports.HyperlinksController = void 0;
const common_1 = require("@nestjs/common");
const hyperlinks_service_1 = require("./hyperlinks.service");
let HyperlinksController = class HyperlinksController {
    constructor(hyperlinkService) {
        this.hyperlinkService = hyperlinkService;
    }
    findOne(id) {
        return this.hyperlinkService.findOne(id);
    }
    findAll() {
        return this.hyperlinkService.findAll();
    }
    create(createHyperlinkDto) {
        return this.hyperlinkService.create(createHyperlinkDto);
    }
    update(id, updateHyperlink) {
        return this.hyperlinkService.update(id, updateHyperlink);
    }
    delete(id) {
        return this.hyperlinkService.delete(id);
    }
};
exports.HyperlinksController = HyperlinksController;
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HyperlinksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HyperlinksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HyperlinksController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], HyperlinksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HyperlinksController.prototype, "delete", null);
exports.HyperlinksController = HyperlinksController = __decorate([
    (0, common_1.Controller)("hyperlinks"),
    __metadata("design:paramtypes", [hyperlinks_service_1.HyperlinksService])
], HyperlinksController);
//# sourceMappingURL=hyperlinks.controller.js.map