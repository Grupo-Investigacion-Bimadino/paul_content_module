import { Injectable } from '@nestjs/common';
@Injectable()
export class MultimediaService {
private multimedia: any[] = [];
findOne(id: number): string {
return `Get multimedia with id ${id}`;
}
findAll(): string {
return 'Get all multimedia';
}
create(createMultimediaDto): string {
this.multimedia.push(createMultimediaDto);
return 'multimedia created successfully';
}
update(id, updateMultimedia): string {
return 'multimedia updated successfully';
}
delete(id): string {
return 'multimedia deleted successfully';
}
}
