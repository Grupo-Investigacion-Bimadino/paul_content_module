"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJvcDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_jvc_dto_1 = require("./create-jvc.dto");
class UpdateJvcDto extends (0, mapped_types_1.PartialType)(create_jvc_dto_1.CreateJvcDto) {
}
exports.UpdateJvcDto = UpdateJvcDto;
//# sourceMappingURL=update-jvc.dto.js.map