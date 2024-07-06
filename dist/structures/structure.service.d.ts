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
/// <reference types="mongoose/types/inferschematype" />
import { CreateJvcDto } from './dto/create-jvc.dto';
import { UpdateJvcDto } from './dto/update-jvc.dto';
import { Model } from 'mongoose';
import { Structure } from './schemas/structure.schema';
export declare class StructureService {
    private structureModel;
    constructor(structureModel: Model<Structure>);
    deepDiff(json_a: any, json_b: any): Promise<{
        added: any;
        modified: any;
        deleted: any;
    }>;
    compareObjects(o1: any, o2: any, path?: string): {
        added: any;
        modified: any;
        deleted: any;
    };
    create(newStructure: CreateJvcDto): Promise<import("mongoose").Document<unknown, {}, Structure> & Structure & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDto: UpdateJvcDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, Structure> & Structure & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, Structure> & Structure & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, Structure, "findOneAndUpdate">;
    remove(id: string): string;
}
