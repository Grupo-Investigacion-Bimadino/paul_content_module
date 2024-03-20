import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    Patch,
    } from '@nestjs/common';
    import { CommentsService } from './comments.service';
    @Controller('comments')
    export class CommentsController {
    constructor(private readonly commentService: CommentsService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
    return this.commentService.findOne(id);
    }
    @Get()
    findAll(): string {
    return this.commentService.findAll();
    }
    @Post()
    create(@Body() createCommentDto): string {
    return this.commentService.create(createCommentDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateComment): string {
    return this.commentService.update(id, updateComment);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
    return this.commentService.delete(id);
    }
    }