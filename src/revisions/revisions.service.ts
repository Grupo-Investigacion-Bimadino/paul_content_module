import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Revisions } from "../revisions/schemas/revision.schema";

@Injectable()
export class RevisionsService {
	constructor(
		@InjectModel(Revisions.name) private revisionstModel: Model<Revisions>
	) {}

	async findOne(id: number) {
		let revisions = await this.revisionstModel.findById(id);
		return revisions;
	}

	async findAll() {
		let revisions = await this.revisionstModel.find();
		return revisions;
	}

	async create(createRevisionDto) {
		let revisions = await this.revisionstModel.create(createRevisionDto);
		return revisions;
	}
	update(id, updateRevision) {
		let revisions = this.revisionstModel.findByIdAndUpdate(id, updateRevision, {
			new: true,
		});
		return revisions;
	}
	delete(id) {
		let revisions = this.revisionstModel.findByIdAndUpdate(id);
		return revisions;
	}
}
