import { Injectable } from '@nestjs/common';
@Injectable()
export class ObservationsService {
private observations: any[] = [];
findOne(id: number): string {
return `Get observations with id ${id}`;
}
findAll(): string {
return 'Get all observations';
}
create(createObservationsDto): string {
this.observations.push(createObservationsDto);
return 'observations created successfully';
}
update(id, updateObservations): string {
return 'observations updated successfully';
}
delete(id): string {
return 'observations deleted successfully';
}
}
