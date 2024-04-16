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
import { HyperlinksService } from "./hyperlinks.service";
@Controller("hyperlinks")
export class HyperlinksController {
	constructor(private readonly hyperlinkService: HyperlinksService) {}
	// find one by id findOne(id)
	@Get(":id")
	findOne(@Param("id") id: number) {
		return this.hyperlinkService.findOne(id);
	}
	@Get()
	findAll() {
		return this.hyperlinkService.findAll();
	}
	@Post()
	create(@Body() createHyperlinkDto) {
		return this.hyperlinkService.create(createHyperlinkDto);
	}
	@Patch(":id")
	update(@Param("id") id: number, @Body() updateHyperlink) {
		return this.hyperlinkService.update(id, updateHyperlink);
	}
	@Delete(":id")
	delete(@Param("id") id: number) {
		return this.hyperlinkService.delete(id);
	}
}
