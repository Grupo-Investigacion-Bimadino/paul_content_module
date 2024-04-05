import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comments } from "../comments/schemas/comments.schema";

@Injectable()
export class CommentsService {
	constructor(
		@InjectModel(Comments.name) private commentstModel: Model<Comments>
	) {}
	async findOne(id: number) {
		let comments = await this.commentstModel.findById(id);
		return comments;
	}

	async findAll() {
		let comments = await this.commentstModel.find();
		return comments;
	}

	create(createCommentDto) {
		let comments = new this.commentstModel(createCommentDto);
	}
	update(id, updateComment) {
		let comments = this.commentstModel.findByIdAndUpdate(id, updateComment, {
			new: true,
		});
		return comments;
	}
	delete(id) {
		let comments = this.commentstModel.findByIdAndUpdate(id);
		return comments;
	}
}
