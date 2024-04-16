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
import { Contents } from "../contents/schemas/content.schema";
export declare class ContentsService {
    private contentstModel;
    constructor(contentstModel: Model<Contents>);
    findOne(id: number): Promise<import("mongoose").Document<unknown, {}, Contents> & Contents & Required<{
<<<<<<< HEAD
        _id: string;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Contents> & Contents & Required<{
        _id: string;
    }>)[]>;
    create(createContentDto: any): void;
    update(id: any, updateContent: any): typeof Contents;
    delete(id: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Contents> & Contents & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, Contents> & Contents & Required<{
        _id: string;
=======
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Contents> & Contents & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    create(createContentDto: any): Promise<import("mongoose").Document<unknown, {}, Contents> & Contents & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: any, updateContent: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Contents> & Contents & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, Contents> & Contents & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, Contents, "findOneAndUpdate">;
    delete(id: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Contents> & Contents & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, Contents> & Contents & Required<{
        _id: import("mongoose").Types.ObjectId;
>>>>>>> main
    }>, {}, Contents, "findOneAndUpdate">;
}
