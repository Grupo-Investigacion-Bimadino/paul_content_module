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
    import { CategoriesService } from './categories.service';
    @Controller('categories')
    export class CategoriesController {
    constructor(private readonly categorieService: CategoriesService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
    return this.categorieService.findOne(id);
    }
    @Get()
    findAll(): string {
    return this.categorieService.findAll();
    }
    @Post()
    create(@Body() createCategorieDto): string {
    return this.categorieService.create(createCategorieDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateCategorie): string {
    return this.categorieService.update(id, updateCategorie);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
    return this.categorieService.delete(id);
    }
    }