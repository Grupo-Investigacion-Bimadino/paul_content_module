import { Injectable } from '@nestjs/common';
@Injectable()
export class CategoriesService {
private categories: any[] = [];
findOne(id: number): string {
return `Get categories with id ${id}`;
}
findAll(): string {
return 'Get all categories';
}
create(createCategorieDto): string {
this.categories.push(createCategorieDto);
return 'categories created successfully';
}
update(id, updateCategorie): string {
return 'categories updated successfully';
}
delete(id): string {
return 'categories deleted successfully';
}
}
