import { RevisionsService } from './revisions.service';
export declare class RevisionsController {
    private readonly revisionService;
    constructor(revisionService: RevisionsService);
    findOne(id: number): string;
    findAll(): string;
    create(createRevisionDto: any): string;
    update(id: number, updateRevision: any): string;
    delete(id: number): string;
}
