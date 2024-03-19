import { Injectable } from '@nestjs/common';
@Injectable()
export class PreviewService {
private previews: any[] = [];
findOne(id: number): string {
return `Get preview with id ${id}`;
}
findAll(): string {
return 'Get all preview';
}
create(createPreviewDto): string {
this.previews.push(createPreviewDto);
return 'preview created successfully';
}
update(id, updatePreview): string {
return 'preview updated successfully';
}
delete(id): string {
return 'preview deleted successfully';
}
}
