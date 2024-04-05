import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Categories } from "../categories/schemas/categorie.schema";

@Injectable()
export class CategoriesService {
	constructor(
		@InjectModel(Categories.name) private categoriestModel: Model<Categories>
	) {}

	async findOne(id: number) {
		let categories = await this.categoriestModel.findById(id);
		return categories;
	}

	async findAll() {
		let categories = await this.categoriestModel.find();
		return categories;
	}

	create(createCategorieDto) {
		let categories = new this.categoriestModel(createCategorieDto);
	}
	update(id, updateCategorie) {
		let categories = this.categoriestModel.findByIdAndUpdate(
			id,
			updateCategorie,
			{ new: true }
		);
		return categories;
	}
	delete(id) {
        let categories = this.categoriestModel.findByIdAndUpdate(id);
		return categories;
	}
}
