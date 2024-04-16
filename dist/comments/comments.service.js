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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comments_schema_1 = require("../comments/schemas/comments.schema");
let CommentsService = class CommentsService {
    constructor(commentstModel) {
        this.commentstModel = commentstModel;
    }
    async findOne(id) {
        let comments = await this.commentstModel.findById(id);
        return comments;
    }
    async findAll() {
        let comments = await this.commentstModel.find();
        return comments;
    }
    create(createCommentDto) {
        let comments = new this.commentstModel(createCommentDto);
    }
    update(id, updateComment) {
        let comments = this.commentstModel.findByIdAndUpdate(id, updateComment, {
            new: true,
        });
        return comments;
    }
    delete(id) {
        let comments = this.commentstModel.findByIdAndUpdate(id);
        return comments;
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comments_schema_1.Comments.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CommentsService);
//# sourceMappingURL=comments.service.js.map