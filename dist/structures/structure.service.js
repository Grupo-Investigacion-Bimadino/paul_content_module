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
exports.StructureService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const structure_schema_1 = require("./schemas/structure.schema");
let StructureService = class StructureService {
    constructor(structureModel) {
        this.structureModel = structureModel;
    }
    async deepDiff(json_a, json_b) {
        return await this.compareObjects(json_a, json_b, '');
    }
    compareObjects(o1, o2, path = '') {
        let added = {};
        let modified = {};
        let deleted = {};
        const processProperty = (key, value1, value2) => {
            const newPath = path ? `${path}.${key}` : key;
            if (typeof value1 === 'object' && value1 !== null && typeof value2 === 'object' && value2 !== null) {
                const { added: addedInner, modified: modifiedInner, deleted: deletedInner } = this.compareObjects(value1, value2, newPath);
                added = { ...added, ...addedInner };
                modified = { ...modified, ...modifiedInner };
                deleted = { ...deleted, ...deletedInner };
            }
            else {
                if (value1 !== value2) {
                    modified[newPath] = { old: value1, new: value2 };
                }
            }
        };
        for (const key in o1) {
            if (o1.hasOwnProperty(key)) {
                if (!o2.hasOwnProperty(key)) {
                    deleted[`${path ? `${path}.` : ''}${key}`] = o1[key];
                }
                else {
                    processProperty(key, o1[key], o2[key]);
                }
            }
        }
        for (const key in o2) {
            if (o2.hasOwnProperty(key) && !o1.hasOwnProperty(key)) {
                added[`${path ? `${path}.` : ''}${key}`] = o2[key];
            }
        }
        return { added, modified, deleted };
    }
    async create(newStructure) {
        let structure = await this.structureModel.create(newStructure);
        return structure;
    }
    findAll() {
        return `This action returns all jvc`;
    }
    findOne(id) {
        return `This action returns a #${id} jvc`;
    }
    update(id, updateDto) {
        const updateOps = { $set: updateDto };
        let structure = this.structureModel.findByIdAndUpdate(id, updateOps, { new: true });
        return structure;
    }
    remove(id) {
        return `This action removes a #${id} jvc`;
    }
};
exports.StructureService = StructureService;
exports.StructureService = StructureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(structure_schema_1.Structure.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StructureService);
//# sourceMappingURL=structure.service.js.map