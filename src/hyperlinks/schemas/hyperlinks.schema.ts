import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Hyperlinks extends Document {
    _id: mongoose.Types.ObjectId;

    @Prop()
    url: string;

    @Prop()
    link_text: string;

    @Prop()
    creation_date: Date;

    @Prop()
    author: string;
}

export const HyperlinksSchema = SchemaFactory.createForClass(Hyperlinks);

