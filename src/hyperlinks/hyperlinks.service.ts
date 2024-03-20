import { Injectable } from '@nestjs/common';
@Injectable()
export class HyperlinksService {
private hyperlinks: any[] = [];
findOne(id: number): string {
return `Get hyperlinks with id ${id}`;
}
findAll(): string {
return 'Get all hyperlinks';
}
create(createHyperlinkDto): string {
this.hyperlinks.push(createHyperlinkDto);
return 'hyperlinks created successfully';
}
update(id, updateHyperlink): string {
return 'hyperlinks updated successfully';
}
delete(id): string {
return 'hyperlinks deleted successfully';
}
}
