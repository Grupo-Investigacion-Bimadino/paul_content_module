import { Injectable } from '@nestjs/common';
@Injectable()
export class ContentsService {
private contents: any[] = [];
findOne(id: number): string {
return `Get contents with id ${id}`;
}
findAll(): string {
return 'Get all contentss';
}
create(createContentDto): string {
this.contents.push(createContentDto);
return 'contents created successfully';
}
update(id, updateContent): string {
return 'contents updated successfully';
}
delete(id): string {
return 'contents deleted successfully';
}
}

