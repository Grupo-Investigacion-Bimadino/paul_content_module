import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Contents } from "../contents/schemas/content.schema";

@Injectable()
export class ContentsService {
	constructor(
		@InjectModel(Contents.name) private contentstModel: Model<Contents>
	) {}

	async findOne(id: number) {
		let contents = await this.contentstModel.findById(id);
		return contents;
	}

	async findAll() {
		let contents = await this.contentstModel.find();
		return contents;
	}

	async create(createContentDto) {
		let contents = await this.contentstModel.create(createContentDto);
		return contents;
	}
	update(id, updateContent) {
		let contents = this.contentstModel.findByIdAndUpdate(id, updateContent, {
			new: true,
		});
		return contents;
	}
	delete(id) {
		let contents = this.contentstModel.findByIdAndUpdate(id);
		return contents;
	}
}
