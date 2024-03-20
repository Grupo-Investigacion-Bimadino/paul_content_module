"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewService = void 0;
const common_1 = require("@nestjs/common");
let PreviewService = class PreviewService {
    constructor() {
        this.previews = [];
    }
    findOne(id) {
        return `Get preview with id ${id}`;
    }
    findAll() {
        return 'Get all preview';
    }
    create(createPreviewDto) {
        this.previews.push(createPreviewDto);
        return 'preview created successfully';
    }
    update(id, updatePreview) {
        return 'preview updated successfully';
    }
    delete(id) {
        return 'preview deleted successfully';
    }
};
exports.PreviewService = PreviewService;
exports.PreviewService = PreviewService = __decorate([
    (0, common_1.Injectable)()
], PreviewService);
//# sourceMappingURL=preview.service.js.map