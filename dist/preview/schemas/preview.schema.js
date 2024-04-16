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
exports.PreviewSchema = exports.Preview = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Preview = class Preview extends mongoose_2.Document {
};
exports.Preview = Preview;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Preview.prototype, "preview_url", void 0);
__decorate([
<<<<<<< HEAD
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Object)
=======
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
>>>>>>> main
], Preview.prototype, "associated_content", void 0);
exports.Preview = Preview = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Preview);
exports.PreviewSchema = mongoose_1.SchemaFactory.createForClass(Preview);
//# sourceMappingURL=preview.schema.js.map