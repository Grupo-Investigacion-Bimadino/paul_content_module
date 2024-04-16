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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const categorie_schema_1 = require("../categories/schemas/categorie.schema");
let CategoriesService = class CategoriesService {
    constructor(categoriestModel) {
        this.categoriestModel = categoriestModel;
    }
    async findOne(id) {
        let categories = await this.categoriestModel.findById(id);
        return categories;
    }
    async findAll() {
        let categories = await this.categoriestModel.find();
        return categories;
    }
    create(createCategorieDto) {
        let categories = new this.categoriestModel(createCategorieDto);
    }
    update(id, updateCategorie) {
        let categories = this.categoriestModel.findByIdAndUpdate(id, updateCategorie, { new: true });
        return categories;
    }
    delete(id) {
        let categories = this.categoriestModel.findByIdAndUpdate(id);
        return categories;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(categorie_schema_1.Categories.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map