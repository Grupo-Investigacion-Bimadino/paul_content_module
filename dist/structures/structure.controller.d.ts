/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { StructureService } from './structure.service';
import { CreateJvcDto } from './dto/create-jvc.dto';
import { UpdateJvcDto } from './dto/update-jvc.dto';
export declare class StructureController {
    private readonly jvcService;
    constructor(jvcService: StructureService);
    create(createJvcDto: CreateJvcDto): Promise<import("mongoose").Document<unknown, {}, import("src/structures/schemas/structure.schema").Structure> & import("src/structures/schemas/structure.schema").Structure & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateJvcDto: UpdateJvcDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/structures/schemas/structure.schema").Structure> & import("src/structures/schemas/structure.schema").Structure & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("src/structures/schemas/structure.schema").Structure> & import("src/structures/schemas/structure.schema").Structure & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("src/structures/schemas/structure.schema").Structure, "findOneAndUpdate">;
    remove(id: string): string;
}
