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
import mongoose, { Document } from 'mongoose';
export declare class Revisions extends Document {
    _id: string;
    version: string;
    review_author: string;
}
export declare const RevisionsSchema: mongoose.Schema<Revisions, mongoose.Model<Revisions, any, any, any, mongoose.Document<unknown, any, Revisions> & Revisions & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Revisions, mongoose.Document<unknown, {}, mongoose.FlatRecord<Revisions>> & mongoose.FlatRecord<Revisions> & Required<{
    _id: string;
}>>;
