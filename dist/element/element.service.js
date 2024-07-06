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
exports.ElementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const element_schema_1 = require("./schemas/element.schema");
let ElementService = class ElementService {
    constructor(elementModel) {
        this.elementModel = elementModel;
    }
    async create(createElementDto) {
        const element = new this.elementModel(createElementDto);
        const newElement = await element.save();
        return newElement;
    }
    async findAll() {
        const elements = await this.elementModel.find().exec();
        return elements;
    }
    async findOne(id) {
        const element = await this.elementModel.findById(id).exec();
        return element;
    }
    async update(id, updateElementDto) {
        const updatedElement = await this.elementModel.findByIdAndUpdate(id, updateElementDto, { new: true });
        return updatedElement;
    }
    async remove(id) {
        const element = await this.elementModel.findByIdAndDelete(id);
        return element;
    }
};
exports.ElementService = ElementService;
exports.ElementService = ElementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(element_schema_1.Element.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ElementService);
//# sourceMappingURL=element.service.js.map