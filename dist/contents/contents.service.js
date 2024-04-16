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
exports.ContentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const content_schema_1 = require("../contents/schemas/content.schema");
let ContentsService = class ContentsService {
    constructor(contentstModel) {
        this.contentstModel = contentstModel;
    }
    async findOne(id) {
        let contents = await this.contentstModel.findById(id);
        return contents;
    }
    async findAll() {
        let contents = await this.contentstModel.find();
        return contents;
    }
<<<<<<< HEAD
    create(createContentDto) {
        let contents = new this.contentstModel(createContentDto);
=======
    async create(createContentDto) {
        let contents = await this.contentstModel.create(createContentDto);
        return contents;
>>>>>>> main
    }
    update(id, updateContent) {
        let contents = this.contentstModel.findByIdAndUpdate(id, updateContent, {
            new: true,
        });
<<<<<<< HEAD
        return content_schema_1.Contents;
=======
        return contents;
>>>>>>> main
    }
    delete(id) {
        let contents = this.contentstModel.findByIdAndUpdate(id);
        return contents;
    }
};
exports.ContentsService = ContentsService;
exports.ContentsService = ContentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(content_schema_1.Contents.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContentsService);
//# sourceMappingURL=contents.service.js.map