"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Structure = void 0;
const common_1 = require("@nestjs/common");
const structure_service_1 = require("./structure.service");
const structure_controller_1 = require("./structure.controller");
const mongoose_1 = require("@nestjs/mongoose");
const structure_schema_1 = require("./schemas/structure.schema");
let Structure = class Structure {
};
exports.Structure = Structure;
exports.Structure = Structure = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Structure', schema: structure_schema_1.StructureSchema }]),
        ],
        controllers: [structure_controller_1.StructureController],
        providers: [structure_service_1.StructureService],
    })
], Structure);
//# sourceMappingURL=structure.module.js.map