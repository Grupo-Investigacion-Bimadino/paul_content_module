"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationModule = void 0;
const common_1 = require("@nestjs/common");
const publication_controller_1 = require("./publication.controller");
const publication_service_1 = require("./publication.service");
const mongoose_1 = require("@nestjs/mongoose");
const publication_schema_1 = require("../publication/schemas/publication.schema");
const publication_schema_2 = require("../publication/schemas/publication.schema");
let PublicationModule = class PublicationModule {
};
exports.PublicationModule = PublicationModule;
exports.PublicationModule = PublicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: publication_schema_2.Publication.name, schema: publication_schema_1.PublicationSchema }]),
        ],
        controllers: [publication_controller_1.PublicationController],
        providers: [publication_service_1.PublicationService]
    })
], PublicationModule);
//# sourceMappingURL=publication.module.js.map