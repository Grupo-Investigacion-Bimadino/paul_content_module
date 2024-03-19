import { CommentsService } from './comments.service';
export declare class CommentsController {
    private readonly commentService;
    constructor(commentService: CommentsService);
    findOne(id: number): string;
    findAll(): string;
    create(createCommentDto: any): string;
    update(id: number, updateComment: any): string;
    delete(id: number): string;
}
