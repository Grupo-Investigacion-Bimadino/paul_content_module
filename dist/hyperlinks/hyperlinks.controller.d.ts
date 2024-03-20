import { HyperlinksService } from './hyperlinks.service';
export declare class HyperlinksController {
    private readonly hyperlinkService;
    constructor(hyperlinkService: HyperlinksService);
    findOne(id: number): string;
    findAll(): string;
    create(createHyperlinkDto: any): string;
    update(id: number, updateHyperlink: any): string;
    delete(id: number): string;
}
