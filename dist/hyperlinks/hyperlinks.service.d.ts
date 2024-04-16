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
import { Model } from "mongoose";
import { Hyperlinks } from "../hyperlinks/schemas/hyperlinks.schema";
export declare class HyperlinksService {
    private hyperlinkstModel;
    constructor(hyperlinkstModel: Model<Hyperlinks>);
    findOne(id: number): Promise<import("mongoose").Document<unknown, {}, Hyperlinks> & Hyperlinks & Required<{
        _id: string;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Hyperlinks> & Hyperlinks & Required<{
        _id: string;
    }>)[]>;
    create(createHyperlinkDto: any): void;
    update(id: any, createHyperlinkDto: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Hyperlinks> & Hyperlinks & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, Hyperlinks> & Hyperlinks & Required<{
        _id: string;
    }>, {}, Hyperlinks, "findOneAndUpdate">;
    delete(id: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Hyperlinks> & Hyperlinks & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, Hyperlinks> & Hyperlinks & Required<{
        _id: string;
    }>, {}, Hyperlinks, "findOneAndUpdate">;
}
