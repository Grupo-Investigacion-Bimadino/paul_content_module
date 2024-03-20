import { PreviewService } from './preview.service';
export declare class PreviewController {
    private readonly previewService;
    constructor(previewService: PreviewService);
    findOne(id: number): string;
    findAll(): string;
    create(createPreviewDto: any): string;
    update(id: number, updatePreview: any): string;
    delete(id: number): string;
}
