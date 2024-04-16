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
import { HyperlinksService } from "./hyperlinks.service";
export declare class HyperlinksController {
    private readonly hyperlinkService;
    constructor(hyperlinkService: HyperlinksService);
    findOne(id: number): Promise<import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
<<<<<<< HEAD
        _id: string;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: string;
    }>)[]>;
    create(createHyperlinkDto: any): void;
    update(id: number, updateHyperlink: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: string;
    }>, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks, "findOneAndUpdate">;
    delete(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: string;
=======
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    create(createHyperlinkDto: any): Promise<import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: number, updateHyperlink: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks, "findOneAndUpdate">;
    delete(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks> & import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks & Required<{
        _id: import("mongoose").Types.ObjectId;
>>>>>>> main
    }>, {}, import("src/hyperlinks/schemas/hyperlinks.schema").Hyperlinks, "findOneAndUpdate">;
}
