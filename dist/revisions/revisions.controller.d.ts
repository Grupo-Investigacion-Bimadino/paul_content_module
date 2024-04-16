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
import { RevisionsService } from "./revisions.service";
export declare class RevisionsController {
    private readonly revisionService;
    constructor(revisionService: RevisionsService);
    findOne(id: number): Promise<import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
<<<<<<< HEAD
        _id: string;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: string;
    }>)[]>;
    create(createRevisionDto: any): void;
    update(id: number, updateRevision: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: string;
    }>, {}, import("src/revisions/schemas/revision.schema").Revisions, "findOneAndUpdate">;
    delete(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: string;
=======
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    create(createRevisionDto: any): Promise<import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: number, updateRevision: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("src/revisions/schemas/revision.schema").Revisions, "findOneAndUpdate">;
    delete(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("src/revisions/schemas/revision.schema").Revisions> & import("src/revisions/schemas/revision.schema").Revisions & Required<{
        _id: import("mongoose").Types.ObjectId;
>>>>>>> main
    }>, {}, import("src/revisions/schemas/revision.schema").Revisions, "findOneAndUpdate">;
}
