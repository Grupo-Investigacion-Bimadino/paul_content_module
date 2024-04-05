import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  mongoose, {Document} from 'mongoose';

@Schema({
    timestamps: true
})

export class Comments extends Document {
    @Prop()
    _id: string;

    @Prop()
    comment_text: string;

    @Prop()
    creation_date: Date;

    @Prop()
    author: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comments);


