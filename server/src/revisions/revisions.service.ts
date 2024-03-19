import { Injectable } from '@nestjs/common';
@Injectable()
export class RevisionsService {
private revisions: any[] = [];
findOne(id: number): string {
return `Get revision with id ${id}`;
}
findAll(): string {
return 'Get all revision';
}
create(createRevisionDto): string {
this.revisions.push(createRevisionDto);
return 'revision created successfully';
}
update(id, updateRevision): string {
return 'revision updated successfully';
}
delete(id): string {
return 'revision deleted successfully';
}
}
