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
exports.HyperlinksSchema = exports.Hyperlinks = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Hyperlinks = class Hyperlinks extends mongoose_2.Document {
};
exports.Hyperlinks = Hyperlinks;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Hyperlinks.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Hyperlinks.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Hyperlinks.prototype, "link_text", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Hyperlinks.prototype, "creation_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Hyperlinks.prototype, "author", void 0);
exports.Hyperlinks = Hyperlinks = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Hyperlinks);
exports.HyperlinksSchema = mongoose_1.SchemaFactory.createForClass(Hyperlinks);
//# sourceMappingURL=hyperlinks.schema.js.map