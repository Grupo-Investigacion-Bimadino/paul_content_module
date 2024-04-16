import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Put,
	Delete,
	Patch,
} from "@nestjs/common";
import { ContentsService } from "./contents.service";
@Controller("contents")
export class ContentsController {
	constructor(private readonly contentService: ContentsService) {}
	// find one by id findOne(id)
	@Get(":id")
	findOne(@Param("id") id: number) {
		return this.contentService.findOne(id);
	}
	@Get()
	findAll() {
		return this.contentService.findAll();
	}
	@Post()
	create(@Body() createContentDto) {
		return this.contentService.create(createContentDto);
	}
	@Patch(":id")
	update(@Param("id") id: number, @Body() updateContent) {
		return this.contentService.update(id, updateContent);
	}
	@Delete(":id")
	delete(@Param("id") id: number) {
		return this.contentService.delete(id);
	}
}
