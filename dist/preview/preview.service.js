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
exports.PreviewService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const preview_schema_1 = require("../preview/schemas/preview.schema");
let PreviewService = class PreviewService {
    constructor(previewtModel) {
        this.previewtModel = previewtModel;
    }
    async findOne(id) {
        let preview = await this.previewtModel.findById(id);
        return preview;
    }
    async findAll() {
        let preview = await this.previewtModel.find();
        return preview;
    }
    async create(createCategorieDto) {
        let preview = await this.previewtModel.create(createCategorieDto);
        return preview;
    }
    update(id, updatePreview) {
        let preview = this.previewtModel.findByIdAndUpdate(id, updatePreview, {
            new: true,
        });
        return preview;
    }
    delete(id) {
        let preview = this.previewtModel.findByIdAndUpdate(id);
        return preview;
    }
};
exports.PreviewService = PreviewService;
exports.PreviewService = PreviewService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(preview_schema_1.Preview.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PreviewService);
//# sourceMappingURL=preview.service.js.map