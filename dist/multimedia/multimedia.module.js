"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultimediaModule = void 0;
const common_1 = require("@nestjs/common");
const multimedia_controller_1 = require("./multimedia.controller");
const multimedia_service_1 = require("./multimedia.service");
const mongoose_1 = require("@nestjs/mongoose");
const multimedia_schema_1 = require("./schemas/multimedia.schema");
const multimedia_schema_2 = require("./schemas/multimedia.schema");
let MultimediaModule = class MultimediaModule {
};
exports.MultimediaModule = MultimediaModule;
exports.MultimediaModule = MultimediaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: multimedia_schema_2.Multimedia.name, schema: multimedia_schema_1.MultimediaSchema }]),
        ],
        controllers: [multimedia_controller_1.MultimediaController],
        providers: [multimedia_service_1.MultimediaService]
    })
], MultimediaModule);
//# sourceMappingURL=multimedia.module.js.map