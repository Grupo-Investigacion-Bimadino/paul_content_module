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
import { PreviewService } from "./preview.service";
export declare class PreviewController {
    private readonly previewService;
    constructor(previewService: PreviewService);
    findOne(id: number): Promise<import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
<<<<<<< HEAD
        _id: string;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: string;
    }>)[]>;
    create(createPreviewDto: any): void;
    update(id: number, updatePreview: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: string;
    }>, {}, import("src/preview/schemas/preview.schema").Preview, "findOneAndUpdate">;
    delete(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: string;
=======
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    create(createPreviewDto: any): Promise<import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: number, updatePreview: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("src/preview/schemas/preview.schema").Preview, "findOneAndUpdate">;
    delete(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("src/preview/schemas/preview.schema").Preview> & import("src/preview/schemas/preview.schema").Preview & Required<{
        _id: import("mongoose").Types.ObjectId;
>>>>>>> main
    }>, {}, import("src/preview/schemas/preview.schema").Preview, "findOneAndUpdate">;
}
