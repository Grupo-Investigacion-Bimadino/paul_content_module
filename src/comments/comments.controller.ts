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
    findOne(@Param('id') id: number) {
    return this.commentService.findOne(id);
    }
    @Get()
    findAll() {
    return this.commentService.findAll();
    }
    @Post()
    create(@Body() createCommentDto) {
    return this.commentService.create(createCommentDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateComment) {
    return this.commentService.update(id, updateComment);
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
    return this.commentService.delete(id);
    }
    }