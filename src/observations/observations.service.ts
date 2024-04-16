import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Observations } from "../observations/schemas/observations.schema";

@Injectable()
export class ObservationsService {
	constructor(
		@InjectModel(Observations.name) private observationstModel: Model<Observations>
	) {}

	async findOne(id: number) {
		let observations = await this.observationstModel.findById(id);
		return observations;
	}

	async findAll() {
		let observations = await this.observationstModel.find();
		return observations;
	}

	async create(createObservationsDto) {
		let observations = await this.observationstModel.create(createObservationsDto);
		return observations;
	}
	update(id, updateObservations) {
		let observations = this.observationstModel.findByIdAndUpdate(
			id,
			updateObservations,
			{ new: true }
		);
		return observations;
	}
	delete(id) {
		let observations = this.observationstModel.findByIdAndUpdate(id);
		return observations;
	}
}
