import { Injectable } from '@nestjs/common';
@Injectable()
export class CommentsService {
private comments: any[] = [];
findOne(id: number): string {
return `Get comments with id ${id}`;
}
findAll(): string {
return 'Get all comments';
}
create(createCommentDto): string {
this.comments.push(createCommentDto);
return 'comments created successfully';
}
update(id, updateComment): string {
return 'comments updated successfully';
}
delete(id): string {
return 'comments deleted successfully';
}
}
