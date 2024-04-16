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
import { ObservationsService } from "./observations.service";
export declare class ObservationsController {
    private readonly observationService;
    constructor(observationService: ObservationsService);
    findOne(id: number): Promise<import("mongoose").Document<unknown, {}, import("src/observations/schemas/observations.schema").Observations> & import("src/observations/schemas/observations.schema").Observations & Required<{
        _id: string;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("src/observations/schemas/observations.schema").Observations> & import("src/observations/schemas/observations.schema").Observations & Required<{
        _id: string;
    }>)[]>;
    create(createObservationsDto: any): void;
    update(id: number, updateObservations: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/observations/schemas/observations.schema").Observations> & import("src/observations/schemas/observations.schema").Observations & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, import("src/observations/schemas/observations.schema").Observations> & import("src/observations/schemas/observations.schema").Observations & Required<{
        _id: string;
    }>, {}, import("src/observations/schemas/observations.schema").Observations, "findOneAndUpdate">;
    delete(id: number): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/observations/schemas/observations.schema").Observations> & import("src/observations/schemas/observations.schema").Observations & Required<{
        _id: string;
    }>, import("mongoose").Document<unknown, {}, import("src/observations/schemas/observations.schema").Observations> & import("src/observations/schemas/observations.schema").Observations & Required<{
        _id: string;
    }>, {}, import("src/observations/schemas/observations.schema").Observations, "findOneAndUpdate">;
}
