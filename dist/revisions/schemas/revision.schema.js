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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevisionsSchema = exports.Revisions = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Revisions = class Revisions extends mongoose_2.Document {
};
exports.Revisions = Revisions;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Revisions.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Revisions.prototype, "version", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Revisions.prototype, "review_author", void 0);
exports.Revisions = Revisions = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Revisions);
exports.RevisionsSchema = mongoose_1.SchemaFactory.createForClass(Revisions);
//# sourceMappingURL=revision.schema.js.map