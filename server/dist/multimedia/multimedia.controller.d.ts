import { MultimediaService } from './multimedia.service';
export declare class MultimediaController {
    private readonly multimediaService;
    constructor(multimediaService: MultimediaService);
    findOne(id: number): string;
    findAll(): string;
    create(createMultimediaDto: any): string;
    update(id: number, updateMultimedia: any): string;
    delete(id: number): string;
}
