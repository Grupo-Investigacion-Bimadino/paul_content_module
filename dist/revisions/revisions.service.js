"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevisionsService = void 0;
const common_1 = require("@nestjs/common");
let RevisionsService = class RevisionsService {
    constructor() {
        this.revisions = [];
    }
    findOne(id) {
        return `Get revision with id ${id}`;
    }
    findAll() {
        return 'Get all revision';
    }
    create(createRevisionDto) {
        this.revisions.push(createRevisionDto);
        return 'revision created successfully';
    }
    update(id, updateRevision) {
        return 'revision updated successfully';
    }
    delete(id) {
        return 'revision deleted successfully';
    }
};
exports.RevisionsService = RevisionsService;
exports.RevisionsService = RevisionsService = __decorate([
    (0, common_1.Injectable)()
], RevisionsService);
//# sourceMappingURL=revisions.service.js.map