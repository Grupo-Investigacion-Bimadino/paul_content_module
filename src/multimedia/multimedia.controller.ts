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
import { MultimediaService } from './multimedia.service';
@Controller('multimedia')
export class MultimediaController {
    constructor(private readonly multimediaService: MultimediaService) { }
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.multimediaService.findOne(id);
    }
    @Get()
    findAll() {
        return this.multimediaService.findAll();
    }
    @Post()
    create(@Body() createMultimediaDto) {
        return this.multimediaService.create(createMultimediaDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateMultimedia) {
        return this.multimediaService.update(id, updateMultimedia);
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.multimediaService.delete(id);
    }
}