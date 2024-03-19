import { Injectable } from '@nestjs/common';
@Injectable()
export class PublicationService {
private publications: any[] = [];
findOne(id: number): string {
return `Get publication with id ${id}`;
}
findAll(): string {
return 'Get all publication';
}
create(createPublicationsDto): string {
this.publications.push(createPublicationsDto);
return 'publication created successfully';
}
update(id, updatePublications): string {
return 'publication updated successfully';
}
delete(id): string {
return 'publication deleted successfully';
}
}

 
