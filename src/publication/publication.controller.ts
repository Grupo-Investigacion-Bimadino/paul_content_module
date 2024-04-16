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
import { PublicationService } from "./publication.service";
@Controller("publications")
export class PublicationController {
	constructor(private readonly publicationService: PublicationService) {}
	// find one by id findOne(id)
	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.publicationService.findOne(id);
	}
	@Get()
	findAll() {
		return this.publicationService.findAll();
	}
	@Post()
	create(@Body() createPublicationDto) {
		return this.publicationService.create(createPublicationDto);
	}
	@Patch(":id")
	update(@Param("id") id: string, @Body() updatePublication) {
		return this.publicationService.update(id, updatePublication);
	}
	@Delete(":id")
	delete(@Param("id") id: string) {
		return this.publicationService.delete(id);
	}
}
