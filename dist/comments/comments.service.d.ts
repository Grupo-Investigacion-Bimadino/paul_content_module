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
import { Comments } from "../comments/schemas/comments.schema";
export declare class CommentsService {
    private commentstModel;
    constructor(commentstModel: Model<Comments>);
    findOne(id: number): Promise<import("mongoose").Document<unknown, {}, Comments> & Comments & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Comments> & Comments & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    create(createCommentDto: any): Promise<import("mongoose").Document<unknown, {}, Comments> & Comments & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(id: any, updateComment: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Comments> & Comments & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, Comments> & Comments & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, Comments, "findOneAndUpdate">;
    delete(id: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Comments> & Comments & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, Comments> & Comments & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, Comments, "findOneAndUpdate">;
}
