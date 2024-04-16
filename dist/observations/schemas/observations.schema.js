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
exports.ObservationsSchema = exports.Observations = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Observations = class Observations extends mongoose_2.Document {
};
exports.Observations = Observations;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Observations.prototype, "review_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Observations.prototype, "review_author", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Observations.prototype, "observation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Observations.prototype, "observation_type", void 0);
exports.Observations = Observations = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Observations);
exports.ObservationsSchema = mongoose_1.SchemaFactory.createForClass(Observations);
//# sourceMappingURL=observations.schema.js.map