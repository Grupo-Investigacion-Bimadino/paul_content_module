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
    import { PreviewService } from './preview.service';
    @Controller('previews')
    export class PreviewController {
    constructor(private readonly previewService: PreviewService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
    return this.previewService.findOne(id);
    }
    @Get()
    findAll(): string {
    return this.previewService.findAll();
    }
    @Post()
    create(@Body() createPreviewDto): string {
    return this.previewService.create(createPreviewDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updatePreview): string {
    return this.previewService.update(id, updatePreview);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
    return this.previewService.delete(id);
    }
    }