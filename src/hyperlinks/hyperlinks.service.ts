import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Hyperlinks } from "../hyperlinks/schemas/hyperlinks.schema";

@Injectable()
export class HyperlinksService {
	constructor(
		@InjectModel(Hyperlinks.name) private hyperlinkstModel: Model<Hyperlinks>
	) {}

	async findOne(id: number) {
		let hyperlinks = await this.hyperlinkstModel.findById(id);
		return hyperlinks;
	}

	async findAll() {
		let hyperlinks = await this.hyperlinkstModel.find();
		return hyperlinks;
	}

	create(createHyperlinkDto) {
		let hyperlinks = new this.hyperlinkstModel(createHyperlinkDto);
	}
	update(id, createHyperlinkDto) {
		let hyperlinks = this.hyperlinkstModel.findByIdAndUpdate(
			id,
			createHyperlinkDto,
			{ new: true }
		);
		return hyperlinks;
	}
	delete(id) {
		let hyperlinks = this.hyperlinkstModel.findByIdAndUpdate(id);
		return hyperlinks;
	}
}
