import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Publication } from "../publication/schemas/publication.schema";

@Injectable()
export class PublicationService {
	constructor(
		@InjectModel(Publication.name) private publicationtModel: Model<Publication>
	) {}

	async findOne(id: number) {
		let publication = await this.publicationtModel.findById(id);
		return publication;
	}

	async findAll() {
		let publication = await this.publicationtModel.find();
		return publication;
	}

	create(createPublicationsDto) {
		let publication = new this.publicationtModel(createPublicationsDto);
	}
	update(id, updatePublications) {
		let publication = this.publicationtModel.findByIdAndUpdate(
			id,
			updatePublications,
			{ new: true }
		);
		return publication;
	}
	delete(id) {
		let publication = this.publicationtModel.findByIdAndUpdate(id);
		return publication;
	}
}
