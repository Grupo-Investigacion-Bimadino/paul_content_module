import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Revisions extends Document {
    _id: mongoose.Types.ObjectId;
    
    @Prop()
    version: string;

    @Prop()
    review_author: string;
}

export const RevisionsSchema = SchemaFactory.createForClass(Revisions);

