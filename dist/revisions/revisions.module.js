"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevisionsModule = void 0;
const common_1 = require("@nestjs/common");
const revisions_controller_1 = require("./revisions.controller");
const revisions_service_1 = require("./revisions.service");
const mongoose_1 = require("@nestjs/mongoose");
const revision_schema_1 = require("../revisions/schemas/revision.schema");
const revision_schema_2 = require("../revisions/schemas/revision.schema");
let RevisionsModule = class RevisionsModule {
};
exports.RevisionsModule = RevisionsModule;
exports.RevisionsModule = RevisionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: revision_schema_2.Revisions.name, schema: revision_schema_1.RevisionsSchema }]),
        ],
        controllers: [revisions_controller_1.RevisionsController],
        providers: [revisions_service_1.RevisionsService]
    })
], RevisionsModule);
//# sourceMappingURL=revisions.module.js.map