import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Preview extends Document {
    @Prop()
    _id: string;

    @Prop()
    preview_url: string;

    @Prop()
    associated_content: object;
}

export const PreviewSchema = SchemaFactory.createForClass(Preview);

