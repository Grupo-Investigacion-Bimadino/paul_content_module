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
    import { HyperlinksService } from './hyperlinks.service';
    @Controller('hyperlinks')
    export class HyperlinksController {
    constructor(private readonly hyperlinkService: HyperlinksService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
    return this.hyperlinkService.findOne(id);
    }
    @Get()
    findAll(): string {
    return this.hyperlinkService.findAll();
    }
    @Post()
    create(@Body() createHyperlinkDto): string {
    return this.hyperlinkService.create(createHyperlinkDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateHyperlink): string {
    return this.hyperlinkService.update(id, updateHyperlink);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
    return this.hyperlinkService.delete(id);
    }
    }