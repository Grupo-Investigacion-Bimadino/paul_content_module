import { PublicationService } from './publication.service';
export declare class PublicationController {
    private readonly publicationService;
    constructor(publicationService: PublicationService);
    findOne(id: number): string;
    findAll(): string;
    create(createPublicationDto: any): string;
    update(id: number, updatePublication: any): string;
    delete(id: number): string;
}
