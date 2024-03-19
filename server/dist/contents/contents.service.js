"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentsService = void 0;
const common_1 = require("@nestjs/common");
let ContentsService = class ContentsService {
    constructor() {
        this.contents = [];
    }
    findOne(id) {
        return `Get contents with id ${id}`;
    }
    findAll() {
        return 'Get all contentss';
    }
    create(createContentDto) {
        this.contents.push(createContentDto);
        return 'contents created successfully';
    }
    update(id, updateContent) {
        return 'contents updated successfully';
    }
    delete(id) {
        return 'contents deleted successfully';
    }
};
exports.ContentsService = ContentsService;
exports.ContentsService = ContentsService = __decorate([
    (0, common_1.Injectable)()
], ContentsService);
//# sourceMappingURL=contents.service.js.map