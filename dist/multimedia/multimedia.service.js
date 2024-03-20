"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaService = void 0;
const common_1 = require("@nestjs/common");
let MultimediaService = class MultimediaService {
    constructor() {
        this.multimedia = [];
    }
    findOne(id) {
        return `Get multimedia with id ${id}`;
    }
    findAll() {
        return 'Get all multimedia';
    }
    create(createMultimediaDto) {
        this.multimedia.push(createMultimediaDto);
        return 'multimedia created successfully';
    }
    update(id, updateMultimedia) {
        return 'multimedia updated successfully';
    }
    delete(id) {
        return 'multimedia deleted successfully';
    }
};
exports.MultimediaService = MultimediaService;
exports.MultimediaService = MultimediaService = __decorate([
    (0, common_1.Injectable)()
], MultimediaService);
//# sourceMappingURL=multimedia.service.js.map