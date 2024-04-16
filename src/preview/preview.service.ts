import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Preview } from "../preview/schemas/preview.schema";

@Injectable()
export class PreviewService {
	constructor(
		@InjectModel(Preview.name) private previewtModel: Model<Preview>
	) {}

	async findOne(id: number) {
		let preview = await this.previewtModel.findById(id);
		return preview;
	}

	async findAll() {
		let preview = await this.previewtModel.find();
		return preview;
	}

	async create(createCategorieDto) {
		let preview = await this.previewtModel.create(createCategorieDto);
		return preview;
	}
	update(id, updatePreview) {
		let preview = this.previewtModel.findByIdAndUpdate(id, updatePreview, {
			new: true,
		});
		return preview;
	}
	delete(id) {
		let preview = this.previewtModel.findByIdAndUpdate(id);
		return preview;
	}
}
