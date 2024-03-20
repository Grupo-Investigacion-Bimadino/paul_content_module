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
    import { RevisionsService } from './revisions.service';
    @Controller('revisions')
    export class RevisionsController {
    constructor(private readonly revisionService: RevisionsService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
    return this.revisionService.findOne(id);
    }
    @Get()
    findAll(): string {
    return this.revisionService.findAll();
    }
    @Post()
    create(@Body() createRevisionDto): string {
    return this.revisionService.create(createRevisionDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateRevision): string {
    return this.revisionService.update(id, updateRevision);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
    return this.revisionService.delete(id);
    }
    }