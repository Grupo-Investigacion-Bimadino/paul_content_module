import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categorieService;
    constructor(categorieService: CategoriesService);
    findOne(id: number): string;
    findAll(): string;
    create(createCategorieDto: any): string;
    update(id: number, updateCategorie: any): string;
    delete(id: number): string;
}
