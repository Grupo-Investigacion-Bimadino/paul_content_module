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
    import { PublicationService } from './publication.service';
    @Controller('publications')
    export class PublicationController {
    constructor(private readonly publicationService: PublicationService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
    return this.publicationService.findOne(id);
    }
    @Get()
    findAll(): string {
    return this.publicationService.findAll();
    }
    @Post()
    create(@Body() createPublicationDto): string {
    return this.publicationService.create(createPublicationDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updatePublication): string {
    return this.publicationService.update(id, updatePublication);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
    return this.publicationService.delete(id);
    }
    }  
