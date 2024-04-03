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
exports.MultimediaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const multimedia_schema_1 = require("./schemas/multimedia.schema");
let MultimediaService = class MultimediaService {
    constructor(multimediatModel) {
        this.multimediatModel = multimediatModel;
    }
    async findOne(id) {
        let multimedia = await this.multimediatModel.findById(id);
        return multimedia;
    }
    async findAll() {
        let multimedia = await this.multimediatModel.find();
        return multimedia;
    }
    create(createMultimediaDto) {
        let multimedia = new this.multimediatModel(createMultimediaDto);
    }
    update(id, updateMultimedia) {
        let multimedia = this.multimediatModel.findByIdAndUpdate(id, updateMultimedia, { new: true });
        return multimedia;
    }
    delete(id) {
        let multimedia = this.multimediatModel.findByIdAndDelete(id);
        return multimedia;
    }
};
exports.MultimediaService = MultimediaService;
exports.MultimediaService = MultimediaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(multimedia_schema_1.Multimedia.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MultimediaService);
//# sourceMappingURL=multimedia.service.js.map