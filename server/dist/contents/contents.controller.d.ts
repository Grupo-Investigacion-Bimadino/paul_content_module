import { ContentsService } from './contents.service';
export declare class ContentsController {
    private readonly contentService;
    constructor(contentService: ContentsService);
    findOne(id: number): string;
    findAll(): string;
    create(createContentDto: any): string;
    update(id: number, updateContent: any): string;
    delete(id: number): string;
}
