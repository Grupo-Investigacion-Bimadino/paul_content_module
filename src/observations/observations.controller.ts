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
import { ObservationsService } from "./observations.service";
@Controller("observations")
export class ObservationsController {
	constructor(private readonly observationService: ObservationsService) {}
	// find one by id findOne(id)
	@Get(":id")
	findOne(@Param("id") id: number) {
		return this.observationService.findOne(id);
	}
	@Get()
	findAll() {
		return this.observationService.findAll();
	}
	@Post()
	create(@Body() createObservationsDto) {
		return this.observationService.create(createObservationsDto);
	}
	@Patch(":id")
	update(@Param("id") id: number, @Body() updateObservations) {
		return this.observationService.update(id, updateObservations);
	}
	@Delete(":id")
	delete(@Param("id") id: number) {
		return this.observationService.delete(id);
	}
}
